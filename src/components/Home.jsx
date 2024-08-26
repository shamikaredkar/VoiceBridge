import { React, useState, useEffect, useRef } from "react";

export default function Home({ setFile, setAudioStream }) {
  const [recordingStatus, setRecordingStatus] = useState("Inactive");
  const [audioChunks, setAudioChunks] = useState([]);
  const [duration, setDuration] = useState(0);
  const mediaRecorder = useRef(null);
  const mimeType = "audio/webm";

  async function startRecording() {
    let tempStream;
    console.log("Start Recording");
    try {
      const streamData = navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false,
      });
      tempStream = streamData;
    } catch (err) {
      console.log(err);
      return;
    }
    setRecordingStatus("recording");

    const media = new MediaRecorder(tempStream, { type: mimeType });
    mediaRecorder.current = media;

    mediaRecorder.current.start();
    let localAudioChunks = [];
    mediaRecorder.current.ondataavailable = (event) => {
      if (typeof event.data === "undefined") {
        return;
      }
      if (event.data.size === 0) {
        return;
      }
      localAudioChunks.push(event.data);
    };
    setAudioChunks(localAudioChunks);
  }

  async function stopRecording() {
    setRecordingStatus("inactive");
    console.log(startRecording);
    mediaRecorder.current.stop();
    mediaRecorder.current.onstop = () => {
      const audioBlob = new Blob(audioChunks, { type: mimeType });
      setAudioStream(audioBlob);
      setAudioChunks([]);
      setDuration(0);
    };
  }

  useEffect(() => {
    if (recordingStatus === "inactive") {
      return;
    }
    const interval = setInterval(() => {
      setDuration((current) => current + 1);
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <main className='flex-1 p-4 flex flex-col gap-3 sm:gap-4 md:gap-5 justify-center text-center pb-20'>
      <h1 className='font-semibold text-5xl sm:text-6xl md:text-7xl'>
        Voice<span className='text-blue-400 bold'>Bridge</span>
      </h1>
      <h3 className='font-medium md:text-lg'>
        Record <span className='text-blue-400'>&rarr;</span> Transcribe{" "}
        <span className='text-blue-400'>&rarr;</span> Translate
      </h3>
      <div className='flex flex-row items-center space-x-2 justify-center font-semibold mt-4'>
        <button
          onClick={
            recordingStatus === "recording" ? stopRecording : startRecording
          }
          className='p-1.5 flex items-center justify-between gap-3 hover:bg-slate-50 duration-200 hover:rounded-lg'
        >
          <p className='hover:text-blue-600 duration-200'>
            {recordingStatus === "inactive" ? "Record" : "Stop Recording"}
          </p>
          <div className='flex items-center gap-2'>
            {duration && <p className='text-sm '>{duration}s</p>}
            <i
              className={
                "fa-solid fa-microphone text-blue-400 duration-200" +
                (recordingStatus === "recording" ? "text-rose-300" : "")
              }
            ></i>
          </div>
        </button>
        <p className='mr-auto font-black'>|</p>
        <p className='text-base gap-3'>
          <label className='p-1.5 cursor-pointer hover:text-blue-600 duration-200 hover:bg-slate-50 hover:rounded-lg'>
            Upload{" "}
            <input
              onChange={(e) => {
                const tempFile = e.target.files[0];
                setFile(tempFile);
              }}
              className='hidden'
              type='file'
              accept='.mp3,.wave'
            />
            <i className='fas fa-file-upload text-blue-400 ml-2'></i>
          </label>
        </p>
      </div>
      <p className='italic text-slate-500'>
        No strings attached. Free forever.
      </p>
    </main>
  );
}

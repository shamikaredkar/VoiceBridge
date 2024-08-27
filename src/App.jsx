import FileDisplay from "./components/FileDisplay";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import React, { useState, useEffect } from "react";
import Transcribing from "./components/Transcribing";
import Info from "./components/Info.jsx";

function App() {
  const [file, setFile] = useState(null);
  const [audioStream, setAudioStream] = useState(null);
  const isAudioAvailable = file || audioStream;
  const [output, setOutput] = useState(null);
  const [loading, setLoading] = useState(true);

  function handleAudioReset() {
    setFile(null);
    setAudioStream(null);
  }

  useEffect(() => {
    console.log(audioStream);
  }, [audioStream]);

  return (
    <>
      <div className='flex flex-col max-w-[1000px] mx-auto w-full'>
        <section className='min-h-screen flex flex-col'>
          <Header />
          {output ? (
            <Info />
          ) : loading ? (
            <Transcribing />
          ) : isAudioAvailable ? (
            <FileDisplay
              file={file}
              audioStream={audioStream}
              handleAudioReset={handleAudioReset}
            />
          ) : (
            <Home setFile={setFile} setAudioStream={setAudioStream} />
          )}
        </section>
        <Footer />
      </div>
    </>
  );
}

export default App;

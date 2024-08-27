import React, { useState, useEffect, useRef } from "react";
import Transcription from "./Transcription";
import Translation from "./Translation";

export default function Info(props) {
  const { output } = props;
  const [tab, setTab] = useState("transcription");
  const [translation, setTranslation] = useState(null);
  const [translating, setTranslating] = useState(null);
  const [toLanguage, setToLanguage] = useState("Select Language");

  const worker = useRef();
  useEffect(() => {
    if (!worker.current) {
      worker.current = new Worker(
        new URL("../utils/translate.worker.js", import.meta.url),
        { type: "module" }
      );
    }
    const onMessageReceived = async (e) => {
      switch (e.data.status) {
        case "initiate":
          console.log("Initiate");
          break;
        case "progress":
          console.log("Progress");
          break;
        case "update":
          setTranslation(e.data.output);
          console.log(e.data.output);
          break;
        case "complete":
          setTranslating(false);
          console.log("Ready");
          break;
      }
    };
    worker.current.addEventListener("message", onMessageReceived);
    return () =>
      worker.current.removeEventListener("message", onMessageReceived);
  }, []);

  function handleCopy() {
    navigator.clipboard.writeText();
  }
  function handleDownload() {
    const element = document.createElement("a");
    const file = new Blob([], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download(`VoiceBridge_${new Date().toDateString()}.txt`);
    document.body.appendChild(element);
    element.click();
  }

  function generateTranslation() {
    if (translating || toLanguage === "Select Language") {
      return;
    }
    setTranslating(true);
    worker.current.postMessage({
      text: output.map((val) => val.text),
      src_lang: "eng_Latn",
      tgt_lang: toLanguage,
    });
  }
  const textElement =
    tab === "transcription"
      ? output.map((val) => val.text)
      : translation || "No translation";

  return (
    <main className='flex-1 p-4 flex flex-col gap-3 sm:gap-4 justify-center text-center text-center pb-20 max-w-prose w-full mx-auto'>
      <h1 className='font-semibold text-4xl sm:text-5xl md:text-6xl whitespace-nowrap'>
        <span className='text-blue-400 bold'>
          {tab === "transcription" ? "Transcription" : "Translation"}
        </span>
      </h1>
      <div className='grid grid-cols-2 items-center bg-white shadow rounded-full overflow-hidden mx-auto'>
        <button
          onClick={() => {
            setTab("transcription");
          }}
          className={
            "px-4 py-1 duration-200 font-medium " +
            (tab === "transcription"
              ? "bg-blue-300 text-white"
              : "text-blue-400 hover:text-blue-600")
          }
        >
          Transcription
        </button>
        <button
          onClick={() => {
            setTab("translation");
          }}
          className={
            "px-4 py-1 duration-200 font-medium " +
            (tab === "translation"
              ? "bg-blue-300 text-white"
              : "text-blue-400 hover:text-blue-600")
          }
        >
          Translation
        </button>
      </div>
      <div className='my-8 flex flex-col'>
        {tab === "transcription" ? (
          <Transcription {...props} textElement={textElement} />
        ) : (
          <Translation
            {...props}
            toLanguage={toLanguage}
            translating={translating}
            textElement={textElement}
            setTranslating={setTranslating}
            setTranslation={setTranslation}
            setToLanguage={setToLanguage}
            generateTranslation={generateTranslation}
          />
        )}
      </div>
      <div className='flex items-center gap-4 mx-auto'>
        <button
          title='Copy'
          className='bg-white text-blue-300 px-2 rounded aspect-square grid place-items-center hover:text-blue-500 duration-200'
        >
          <i className='fa-solid fa-copy'></i>
        </button>
        <button
          title='Download'
          className='bg-white text-blue-300 px-2 rounded aspect-square grid place-items-center hover:text-blue-500 duration-200'
        >
          <i className='fa-solid fa-download'></i>
        </button>
      </div>
    </main>
  );
}

import React, { useState } from "react";

export default function Info() {
  const [tab, setTab] = useState("transcription");
  return (
    <main className='flex-1 p-4 flex flex-col gap-3 sm:gap-4 justify-center text-center text-center pb-20 max-w-prose w-full mx-auto'>
      <h1 className='font-semibold text-4xl sm:text-5xl md:text-6xl whitespace-nowrap'>
        <span className='text-blue-400 bold'>Transcription: </span>
      </h1>
      <div className='grid grid-cols-2 items-center bg-white shadow rounded-full overflow-hidden mx-auto'>
        <button
          onClick={() => {
            setTab("transcription");
          }}
          className={
            "px-4 py-1 duration-200 font-medium " +
            (tab === "transcription"
              ? "bg-blue-400 text-white"
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
              ? "bg-blue-400 text-white"
              : "text-blue-400 hover:text-blue-600")
          }
        >
          Translation
        </button>
      </div>
    </main>
  );
}

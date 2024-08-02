import React from "react";

export default function Home() {
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
        <button className='flex items-center justify-between gap-3'>
          <p className='hover:text-blue-600 duration-200'>Record</p>
          <i className='fa-solid fa-microphone text-blue-400'></i>
        </button>
        <p className='mr-auto font-black'>|</p>
        <p className='text-base gap-3'>
          <label className='cursor-pointer hover:text-blue-600 duration-200'>
            Upload <input className='hidden' type='file' accept='.mp3,.wave' />
            <i class='fas fa-file-upload text-blue-400 ml-2'></i>
          </label>
        </p>
      </div>
      <p className='italic text-slate-500'>
        No strings attached. Free forever.
      </p>
    </main>
  );
}

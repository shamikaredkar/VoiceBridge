import React from "react";

export default function Header() {
  return (
    <header className='flex items-center justify-between gap-4 p-4'>
      <h1 className='font-medium'>
        Voice<span className='text-blue-400 bold'>Bridge</span>
      </h1>
      <button className='flex items-center gap-2 specialBtn p-2 rounded-lg text-blue-400 text:sm'>
        <p>New</p>
        <i className='fa-solid fa-plus'></i>
      </button>
    </header>
  );
}

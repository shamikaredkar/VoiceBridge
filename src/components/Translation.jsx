import React from "react";
import { LANGUAGES } from "../utils/presets";

export default function Translation(props) {
  const {
    textElement,
    toLanguage,
    translating,
    setToLanguage,
    generateTranslation,
  } = props;
  return (
    <div className='flex flex-col gap-2 max-w-[400px] mx-auto w-full'>
      {!translating && (
        <div className='flex flex-col gap-1'>
          <p className='text-xs sm:text-sm font-medium text-slate-500 mr-auto'>
            To Language
          </p>
          <div className='flex items-stretch'>
            <select
              value={toLanguage}
              onChange={(e) => setToLanguage(e.target.value)}
              className='flex-1 outline-none bg-white focus:outline-none border border-solid border-transparant hover:border-blue-300 duration-200 p-2 rounded-lg px-4'
            >
              <option value={"Select Language"}>Select Language</option>
              {Object.entries(LANGUAGES).map(([key, value]) => {
                return (
                  <option key={key} value={value}>
                    {key}
                  </option>
                );
              })}
            </select>
            <button
              onClick={generateTranslation}
              className='px-3 py-2 text-blue-400 hover:text-blue-600 duration-200'
            >
              Translate
            </button>
          </div>
        </div>
      )}
      {textElement && !translating && <p>{textElement}</p>}
      {translating && (
        <div className='grid place-items-center'>
          <i className='fa-solid fa-spinner fa-spin'></i>
        </div>
      )}
    </div>
  );
}

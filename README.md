<div align="center"><h2>VoiceBridge - <a href="https://voicebridge-ml.vercel.app/"> Demo</a></h2></div>



https://github.com/user-attachments/assets/1f0de6d1-5354-47ea-9a52-d926a84499d6



## Overview

VoiceBridge is a powerful transcription and translation tool designed to transcribe and translate voice inputs in real time. Utilizing advanced AI models like Whisper-tiny, VoiceBridge ensures high accuracy for both transcription and translation tasks.

## Features

### Transcription
- **Accurate Speech Recognition:** Powered by OpenAI Whisper-tiny model, VoiceBridge supports accurate transcriptions.
- **Real-Time Processing:** Get real-time transcription feedback as the audio is processed, ensuring a smooth user experience.
- **Multi-File Support:** Upload and transcribe multiple files seamlessly.
- **Copy & Download Options:** Users can copy the transcriptions to their clipboard or download them as text files for offline use.

### Translation
- **Wide Language Support:** VoiceBridge supports translation to and from a variety of languages using Whisper-tiny model.
- **Contextual Translations:** Ensures translations preserve the context and meaning from the original speech.
- **Efficient Pipeline:** The application uses an optimized pipeline to handle translations.
- **Copy & Download Options:** Users can copy the translations to their clipboard or download them as text files for offline use.

### Responsive Design
- **Cross-Device Compatibility:** The app is fully responsive and works seamlessly across mobile, tablet, and desktop devices.
- **Intuitive UX:** A user-friendly interface ensures smooth navigation through the transcription and translation features.

## Built With

- [![React.js][React.js]][React-url]
- [![Tailwind CSS][Tailwind]][Tailwind-url]
- [![OpenAI][OpenAI]][OpenAI-url]

## Project Directory
```sh
VoiceBridge
│── functions
│   └── whisper.worker.js          # Worker for handling speech recognition and transcription
│── public
│   ├── assets
│   │   └── wave.svg               # Visual assets for the UI
├── src
│   ├── components                 # React components used in the application
│   │   ├── Transcription.jsx      # Component handling the transcription display
│   │   ├── Translation.jsx        # Component managing translation tasks
│   │   ├── FileDisplay.jsx        # Component for file uploads and display
│   │   ├── Home.jsx               # Main landing page component
│   │   ├── Header.jsx             # Header navigation component
│   │   ├── Footer.jsx             # Footer component with links
│   │   ├── Info.jsx               # Component displaying additional information
│   └── styles
│       └── index.css              # Global and component-specific styles
├── utils
│   ├── presets.js                 # Constants for message types, loading statuses, and model names
│   └── translate.worker.js        # Worker handling translation requests
├── .env                           # Environment variables for secure API access
├── .gitignore                     # Git ignore file
├── netlify.toml                   # Netlify configuration for deployment
├── package.json                   # Project dependencies and metadata
└── README.md                      # Project README documentation
```

<!-- MARKDOWN LINKS & IMAGES -->
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Tailwind]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com/
[OpenAI]: https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white
[OpenAI-url]: https://openai.com/research/whisper


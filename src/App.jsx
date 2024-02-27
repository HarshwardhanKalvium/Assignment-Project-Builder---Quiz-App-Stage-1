import React, { useState } from 'react';
import './App.css';
import Start from './components/Start';
import QuestionBox from './components/QuestionBox';
import Result from './components/Result';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <>
      <nav>
        <img src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt="main-logo" />
        <button>light</button>
      </nav>
      {/* <Start/> */}
      <QuestionBox/>
      {/* <Result/> */}
    </>
  );
}

export default App;
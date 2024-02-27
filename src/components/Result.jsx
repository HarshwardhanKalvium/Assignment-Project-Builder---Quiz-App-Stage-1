import React from 'react';
import './Result.css';

const Result = ({ score, onRestart }) => {
  const totalQuestions = 5;
  const percentage = (score / totalQuestions) * 100;

  return (
    <div>
      <div className='result-div'>
        <h1>Final Results</h1>
        <h2> 4 out of 5 correct - 80%</h2>
        <button>Restart game</button>
      </div>
    </div>
  );
};

export default Result;
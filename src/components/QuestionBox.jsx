import React, { useState, useEffect } from 'react';
import './QuestionBox.css';
import questions from '../questions';

const QuestionBox = ({ onQuestionsCompleted, onScoreUpdate }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);



  return (
    <div>
      <div className='content'>
        <h2>Question: 1 out of 5</h2>
          <div className='main-content'>
            <h1>What is ReactJS?</h1>
            <div>Server-side framework</div>
            <div>user interface framework</div>
            <div>both a and b</div>
            <div>none of the above</div>
          </div>
        <div className='buttons'>
          <button>Highlight</button>
          <button>Remove Highlight</button>
        </div>
        {/* <p>Score: {score}</p> */}
      </div>
    </div>
  );
};

export default QuestionBox;
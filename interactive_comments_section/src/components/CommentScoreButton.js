import '../types';
import React, { useState } from 'react';

/**
 * @typedef {Object} ScoreButtonProps
 * @property {Number} initialScore
 */

/**
 * @param {ScoreButtonProps} props
 * @returns {JSX.Element}
 */
export function CommentScoreButton({ initialScore }) {
  const [score, setScore] = useState(initialScore);

  const handlePlusButtonClick = () => {
    setScore(prev => prev + 1);
  };

  const handleMinusButtonClick = () => {
    setScore(prev => prev - 1);
  };

  return (
    <div className="flex flex-col items-center bg-very-light-gray rounded-lg px-3 py-2 mr-4 self-start">
      <button
        className="text-light-grayish-blue hover:text-moderate-blue"
        onClick={handlePlusButtonClick}
      >
        +
      </button>
      <span className="text-moderate-blue font-medium my-2">{score}</span>
      <button
        className="text-light-grayish-blue hover:text-moderate-blue"
        onClick={handleMinusButtonClick}
      >
        -
      </button>
    </div>
  );
}

import React from 'react';

interface ScoreButtonProps {
  score: number;
  onClick: {
    minus: () => void;
    plus: () => void;
  };
}

const ScoreButton = (props: ScoreButtonProps) => {
  return (
    <div className="flex sm:flex-col flex-row p-2 items-center align-center rounded-xl bg-very_light_gray gap-2 w-fit">
      <div
        className="bg-[url('/public/images/icon-plus.svg')] bg-center bg-no-repeat w-6 h-6 cursor-pointer"
        onClick={() => props.onClick.plus()}
      />
      <div className="text-mid_blue font-semibold">{props.score}</div>
      <div
        className="bg-[url('/public/images/icon-minus.svg')] bg-center bg-no-repeat w-6 h-6 cursor-pointer"
        onClick={() => {
          if (props.score == 0) return;
          props.onClick.minus();
        }}
      />
    </div>
  );
};

export default ScoreButton;

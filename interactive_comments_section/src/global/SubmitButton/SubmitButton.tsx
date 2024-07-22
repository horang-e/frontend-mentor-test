import React from 'react';

interface SubmitButtonProps {
  content: string;
  onClick: () => void;
}

const SubmitButton = (props: SubmitButtonProps) => {
  return (
    <div
      className="bg-mid_blue
    hover:bg-light_grayish_blue
    px-7 py-2 rounded-md text-white font-semibold h-fit cursor-pointer"
      onClick={props.onClick}
    >
      {props.content}
    </div>
  );
};

export default SubmitButton;

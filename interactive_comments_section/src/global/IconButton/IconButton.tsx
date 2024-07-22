import React from 'react';

export interface IconButtonProps {
  content: string;
  iconImage: string;
  onClickIconBtn: () => void;
  color: string;
}

const IconButton = (props: IconButtonProps) => {
  return (
    <div
      className="gap-2.5 w-fit flex p-2 items-center cursor-pointer"
      onClick={props.onClickIconBtn}
    >
      <img src={props.iconImage} className="w-4 h-4" />
      <div className={`text-${props.color} font-semibold`}>{props.content}</div>
    </div>
  );
};

export default IconButton;

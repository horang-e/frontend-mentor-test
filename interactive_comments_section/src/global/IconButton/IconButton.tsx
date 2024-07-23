import React from 'react';

export interface IconButtonProps {
  content: string;
  iconImage: string;
  onClickIconBtn: () => void;
  color: string;
}

const IconButton = (props: IconButtonProps) => {
  const COLOR_CHIP = {
    mid_blue: 'text-mid_blue font-semibold',
    red: 'text-light_red font-semibold',
  };

  return (
    <div
      className="gap-2.5 w-fit flex p-2 items-center cursor-pointer"
      onClick={props.onClickIconBtn}
    >
      <img src={props.iconImage} className="w-4 h-4" />
      <div className={COLOR_CHIP[props.color]}>{props.content}</div>
    </div>
  );
};

export default IconButton;

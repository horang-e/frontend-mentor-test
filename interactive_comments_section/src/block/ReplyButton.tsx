import React from 'react';
import IconButton from '../global/IconButton/IconButton.tsx';

interface ReplyButtonProps {
  none?: boolean;
}

const ReplyButton = (props: ReplyButtonProps) => {
  return (
    <IconButton
      content="Reply"
      iconImage="/images/icon-reply.svg"
      onClickIconBtn={() => {
        console.log('답장 켜지기');
      }}
      color="mid_blue"
    />
  );
};

export default ReplyButton;

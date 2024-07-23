import React from 'react';
import IconButton from '../global/IconButton/IconButton.tsx';

interface ReplyButtonProps {
  setNewReplyForm: React.Dispatch<React.SetStateAction<boolean>>;
  newReplyForm: boolean;
}

const ReplyButton = (props: ReplyButtonProps) => {
  return (
    <IconButton
      content="Reply"
      iconImage="/images/icon-reply.svg"
      onClickIconBtn={() => {
        props.setNewReplyForm(!props.newReplyForm);
      }}
      color="mid_blue"
    />
  );
};

export default ReplyButton;

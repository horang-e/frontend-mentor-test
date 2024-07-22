import React from 'react';
import IconButton from '../global/IconButton/IconButton.tsx';

interface DeleteandEditButtonProps {
  none?: boolean;
}

const DeleteandEditButton = (props: DeleteandEditButtonProps) => {
  return (
    <div className="flex">
      <IconButton
        content="Delete"
        iconImage="/images/icon-delete.svg"
        onClickIconBtn={() => {
          console.log('답장 켜지기');
        }}
        color="grayish_red"
      />
      <IconButton
        content="Edit"
        iconImage="/images/icon-edit.svg"
        onClickIconBtn={() => {
          console.log('답장 켜지기');
        }}
        color="mid_blue"
      />
    </div>
  );
};

export default DeleteandEditButton;

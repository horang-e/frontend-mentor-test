import React from 'react';
import IconButton from '../global/IconButton/IconButton.tsx';

interface DeleteandEditButtonProps {
  onClickEditButton: () => void;
  onClickDeleteButton: () => void;
}

const DeleteandEditButton = (props: DeleteandEditButtonProps) => {
  return (
    <div className="flex">
      {/* <IconButton
        content="Delete"
        iconImage="/images/icon-delete.svg"
        onClickIconBtn={() => {
          console.log('답장 켜지기');
        }}
        color="red"
      /> */}
      <IconButton
        content="Edit"
        iconImage="/images/icon-edit.svg"
        onClickIconBtn={props.onClickEditButton}
        color="mid_blue"
      />
    </div>
  );
};

export default DeleteandEditButton;

import React from 'react';
import ModalComponent from '../global/ModalComponent/ModalComponent.tsx';
import { getLocalValue } from '../hooks/useLocalStorage.ts';
import { IComment } from '../interface/type';
import IconButton from '../global/IconButton/IconButton.tsx';

interface DeleteModalProps {
  setComments: (value: IComment[]) => void;
  id: string | number;
}

const DeleteModal = (props: DeleteModalProps) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const deleteComments = (id: string | number) => {
    const comments = getLocalValue('comments');
    const updatedComments = comments.filter(comment => {
      if (comment.id === id) {
        return false;
      }
      comment.replies =
        comment.replies && comment.replies.filter(reply => reply.id !== id);
      return true;
    });
    props.setComments(updatedComments);
    closeModal();
  };

  return (
    <div>
      <IconButton
        content="Delete"
        iconImage="/images/icon-delete.svg"
        onClickIconBtn={openModal}
        color="red"
      />
      <ModalComponent
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Delete comment"
        additionalButton={
          <button
            className="bg-light_red hover:bg-red-700 px-3 py-2 rounded text-white mr-1 w-6/12 font-semibold"
            onClick={() => deleteComments(props.id)}
          >
            YES, DELETE
          </button>
        }
        cancelContent="NO, CANCEL"
      >
        <p>정말 이 코멘트를 삭제하시겠습니까? 삭제후에는 되돌릴 수 없습니다.</p>
      </ModalComponent>
    </div>
  );
};

export default DeleteModal;

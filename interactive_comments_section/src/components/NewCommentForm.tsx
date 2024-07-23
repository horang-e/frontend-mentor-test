import React, { useState } from 'react';
import { IComment, IReply, IUser } from '../interface/type';
import SubmitButton from '../global/SubmitButton/SubmitButton.tsx';
import { v4 as uuidv4 } from 'uuid';

interface NewCommentFormProps {
  user: IUser;
  comments: IComment[];
  setComments: (value: IComment[]) => void;
  type: 'NEW_COMMENT' | 'REPLY_COMMENT';
  replyTo?: {
    replyTo: string;
    replyId: number | string;
  };
  additionalFunction?: () => void;
}

const NewCommentForm = (props: NewCommentFormProps) => {
  const [content, setContent] = useState<string>('');

  const newComment: IComment = {
    id: uuidv4(),
    content: content,
    createdAt: new Date().toISOString(),
    score: 0,
    user: props.user,
  };

  const addNewComment = () => {
    const copiedComments = [...props.comments];
    copiedComments.push({ ...newComment, replies: [] });
    props.setComments(copiedComments);
    setContent(prev => {
      return '';
    });
  };

  const addNewReply = () => {
    const copiedComments = [...props.comments];
    const updatedComments = copiedComments.map(comment =>
      comment.id === props.replyTo?.replyId && comment.replies
        ? {
            ...comment,
            replies: [
              ...comment.replies,
              { ...newComment, replyingTo: props.replyTo?.replyTo },
            ],
          }
        : comment,
    );
    props.setComments(updatedComments);
    setContent(prev => {
      return '';
    });
    props.additionalFunction && props.additionalFunction();
  };

  const BUTTON_CONTENTS = {
    NEW_COMMENT: {
      content: 'SEND',
      onClick: () => addNewComment(),
    },
    REPLY_COMMENT: {
      content: 'REPLY',
      onClick: () => addNewReply(),
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg flex sm:flex-row flex-col w-full gap-4 mt-2">
      <img
        src={props.user.image.png}
        alt="Profile"
        className="w-8 h-8 rounded-full sm:block hidden"
      />
      <textarea
        onChange={e => setContent(e.target.value)}
        value={content}
        className="border-solid border-2 rounded-lg border-grayish_blue w-full p-3"
        rows={3}
        placeholder="Add a comment.."
      />
      <div className="flex justify-between sm:items-start items-center">
        <img
          src={props.user.image.png}
          alt="Profile"
          className="w-8 h-8 rounded-full sm:hidden"
        />
        <SubmitButton
          content={BUTTON_CONTENTS[props.type].content}
          onClick={BUTTON_CONTENTS[props.type].onClick}
        />
      </div>
    </div>
  );
};

export default NewCommentForm;

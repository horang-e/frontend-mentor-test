import '../types';
import React, { useContext, useState } from 'react';
import { CommentApiContext } from '../providers/CommentProvider';

/**
 * @typedef {Object} AddCommentProps
 * @property {UserObject} currentUser
 * @method onClickSendButton
 */

/**
 * @param {AddCommentProps} props
 * @returns {JSX.Element}
 */
export default function AddComment({ currentUser, onClickSendButton }) {
  const [comment, setComment] = useState('');

  const api = useContext(CommentApiContext);

  const handleTextAreaChange = e => {
    setComment(e.target.value);
  };

  const handleSendButtonClick = () => {
    if (!comment) return;

    api.addComment({
      content: comment,
      createdAt: 'just now',
      score: 0,
      user: currentUser,
      replies: [],
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-start gap-4">
        <img
          src={currentUser.image.png}
          alt={currentUser.username}
          className="w-8 h-8 rounded-full"
        />
        <textarea
          className="w-full p-4 border border-light-gray rounded-lg mb-4 resize-none"
          rows="3"
          placeholder="Add a comment..."
          value={comment.text}
          onChange={handleTextAreaChange}
        ></textarea>
        <button
          className="bg-moderate-blue text-white px-6 py-2 rounded-lg font-medium hover:bg-light-grayish-blue"
          onClick={handleSendButtonClick}
        >
          SEND
        </button>
      </div>
    </div>
  );
}

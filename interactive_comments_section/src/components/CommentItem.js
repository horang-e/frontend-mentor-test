import '../types';
import React, { useContext } from 'react';

import { CommentScoreButton } from './CommentScoreButton';
import { ReplyItem } from './index';
import { CommentApiContext, CommentDataContext } from '../providers';

/**
 * @typedef {Object} CommentItemProps
 * @property {CommentObject} comment
 */

/**
 * @param {CommentItemProps} props
 * @returns {JSX.Element}
 */
export default function CommentItem({ comment }) {
  const api = useContext(CommentApiContext);
  const data = useContext(CommentDataContext);

  const isCurrentUser = comment.user.username === data.currentUser.username;

  const handleDeleteButtonClick = () => {
    api.deleteComment(comment.id);
  };

  const handleEditButtonClick = () => {};

  const handleReplyButtonClick = () => {
    api.addReplyToComment(comment.id, {
      content: 'hello wolrd',
      createdAt: 'just now',
      score: 0,
      replyingTo: comment.user.username,
      user: data.currentUser,
    });
  };

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow flex">
        <CommentScoreButton initialScore={comment.score} />

        <div className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <img
                src={comment.user.image.png}
                alt={`${comment.user.username} Avatar`}
                className="w-8 h-8 rounded-full"
              />
              <span className="font-bold text-dark-blue">
                {comment.user.username}
              </span>
              <span className="text-grayish-blue">{comment.createdAt}</span>
            </div>
            <div className="flex gap-5">
              {isCurrentUser ? (
                <>
                  <button
                    className="flex items-center gap-2 text-soft-red font-medium hover:text-pale-red"
                    onClick={handleDeleteButtonClick}
                  >
                    <img src="/images/icon-delete.svg" alt="icon-reply" />
                    Delete
                  </button>
                  <button
                    className="flex items-center gap-2 text-moderate-blue font-medium hover:text-light-grayish-blue"
                    onClick={handleEditButtonClick}
                  >
                    <img src="/images/icon-edit.svg" alt="icon-reply" />
                    Edit
                  </button>
                </>
              ) : (
                <button
                  className="flex items-center gap-2 text-moderate-blue font-medium hover:text-light-grayish-blue"
                  onClick={handleReplyButtonClick}
                >
                  <img src="/images/icon-reply.svg" alt="icon-reply" />
                  Reply
                </button>
              )}
            </div>
          </div>

          <p className="text-grayish-blue mb-4">{comment.content}</p>
        </div>
      </div>

      <div className="ml-8 space-y-4 border-l-2 border-light-gray pl-4">
        {comment.replies.map(reply => (
          <ReplyItem key={reply.id} reply={reply} commentId={comment.id} />
        ))}
      </div>
    </>
  );
}

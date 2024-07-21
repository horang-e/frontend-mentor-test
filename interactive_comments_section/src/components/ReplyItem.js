import '../types';
import React, { useContext } from 'react';
import ReplyScoreButton from './ReplyScoreButton';
import {
  CommentApiContext,
  CommentDataContext,
} from '../providers/CommentProvider';

/**
 * @typeDef {Object} ReplyItemProps
 * @property {ReplyObject} reply
 * @property {Number} commentId
 */

/**
 *
 * @param {ReplyItemProps} props
 * @returns {JSX.Element}
 */
export default function ReplyItem({ reply, commentId }) {
  const api = useContext(CommentApiContext);
  const data = useContext(CommentDataContext);

  const isCurrentUser = reply.user.username == data.currentUser.username;

  const handleDeleteButtonClick = () => {
    api.deleteReply(commentId, reply.id);
  };

  const handleEditButtonClick = () => {};

  const handleReplyButtonClick = () => {};

  return (
    <div className="bg-white p-6 rounded-lg shadow flex">
      {/* 왼쪽에 위치한 투표 버튼 */}
      <ReplyScoreButton initialScore={reply.score} />

      {/* 오른쪽에 위치한 댓글 내용 */}
      <div className="flex-1">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <img
              src={reply.user.image.png}
              alt={reply.user.name}
              className="w-8 h-8 rounded-full"
            />
            <span className="font-bold text-dark-blue">
              {reply.user.username}
            </span>
            {isCurrentUser ? (
              <span className="bg-moderate-blue text-white px-2 py-0.5 rounded text-xs">
                you
              </span>
            ) : null}
            <span className="text-grayish-blue">{reply.createdAt}</span>
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
        <p className="text-grayish-blue mb-4">
          <span className="text-moderate-blue font-medium">
            {reply.replyingTo ? `@${reply.replyingTo} ` : ' '}
          </span>
          {reply.content}
        </p>
      </div>
    </div>
  );
}

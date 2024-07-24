import React, { createContext, useMemo } from 'react';
import { fetchData, use } from '../utils';
import { useImmer } from 'use-immer';

/**
 * @type {{read(): CommentsData}}
 */
const resource = use(fetchData('/data.json'));

export const CommentDataContext = createContext({});

export const CommentApiContext = createContext({});

/**
 * @typedef {Object} CommentProviderProps
 * @property {Object} children
 */

/**
 *
 * @param {CommentProviderProps} props
 * @constructor
 */
export function CommentProvider({ children }) {
  const [data, updateData] = useImmer(resource.read());

  /**
   * @param {CommentObject} newComment
   * @returns
   */
  const addComment = newComment => {
    updateData(draft => {
      const nextCommentIndex = draft.comments.length;
      draft.comments.push({ id: nextCommentIndex + 1, ...newComment });
    });
  };

  /**
   * @param {Number} commentId
   * @param {ReplyObject} newReply
   * @returns
   */
  const addReplyToComment = (commentId, newReply) => {
    updateData(draft => {
      const targetComment = draft.comments.find(
        comment => comment.id === commentId,
      );

      if (!targetComment) return;

      const nextReplyIndex = targetComment.replies.length;

      targetComment.replies.push({ id: nextReplyIndex + 1, ...newReply });
    });
  };

  const deleteComment = commentId => {
    updateData(draft => {
      draft.comments = draft.comments.filter(
        comment => comment.id !== commentId,
      );
    });
  };

  /**
   * @param {Number} commentId
   * @param {Number} replyId
   */
  const deleteReply = (commentId, replyId) => {
    updateData(draft => {
      const targetComment = draft.comments.find(
        comment => comment.id === commentId,
      );

      if (!targetComment) return;

      targetComment.replies = targetComment.replies.filter(
        reply => reply.id !== replyId,
      );
    });
  };

  /**
   * @param {Number} commentId
   * @param {Number} replyId
   * @params {String} editedContent
   */
  const editReply = (commentId, replyId, editedContent) => {
    //
  };

  const api = useMemo(
    () => ({
      addComment,
      addReplyToComment,
      deleteComment,
      deleteReply,
      editReply,
    }),
    [],
  );

  return (
    <CommentDataContext.Provider value={data}>
      <CommentApiContext.Provider value={api}>
        {children}
      </CommentApiContext.Provider>
    </CommentDataContext.Provider>
  );
}

import { useEffect, useState } from 'react';
import { IComment, IReply } from '../interface/type';
import { useLocalStorage } from './useLocalStorage';

export function useControlComments() {
  const [comments, setComments] = useState<IComment[]>([]);

  const [localComments, setLocalComments] =
    useLocalStorage<IComment[]>('comments');

  useEffect(() => {
    setComments(localComments);
  }, []);

  useEffect(() => {
    setLocalComments(comments);
  }, [comments]);

  const updateScore = (id: number, increment: boolean) => {
    setComments(prevComments =>
      prevComments.map(comment => {
        if (comment.id === id) {
          return {
            ...comment,
            score: increment ? comment.score + 1 : comment.score - 1,
          };
        }
        return {
          ...comment,
          replies:
            comment.replies &&
            comment.replies.map(reply =>
              reply.id === id
                ? {
                    ...reply,
                    score: increment ? reply.score + 1 : reply.score - 1,
                  }
                : reply,
            ),
        };
      }),
    );
  };

  const editComment = (id: number, content: string) => {
    setComments(prevComments =>
      prevComments.map(comment => {
        if (comment.id === id) {
          return { ...comment, content };
        }
        return {
          ...comment,
          replies:
            comment.replies &&
            comment.replies.map(reply =>
              reply.id === id ? { ...reply, content } : reply,
            ),
        };
      }),
    );
  };

  const deleteComment = (id: number) => {
    setComments(prevComments =>
      prevComments.filter(comment => {
        if (comment.id === id) {
          return false;
        }
        comment.replies =
          comment.replies && comment.replies.filter(reply => reply.id !== id);
        return true;
      }),
    );
  };

  const addComment = (comment: IComment) => {
    setComments(prevComments => [...prevComments, comment]);
  };

  const addReply = (commentId: number, reply: IReply) => {
    setComments(prevComments =>
      prevComments.map(comment =>
        comment.id === commentId && comment.replies
          ? { ...comment, replies: [...comment.replies, reply] }
          : comment,
      ),
    );
  };

  return {
    comments,
    setComments,
    updateScore,
    editComment,
    deleteComment,
    addComment,
    addReply,
  };
}

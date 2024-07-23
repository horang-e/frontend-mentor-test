import React, { useEffect, useState } from 'react';
import { IComment, IReply, IUser } from '../interface/type';
import ProfileSection from '../block/ProfileSection.tsx';
import ScoreButton from '../block/ScoreButton.tsx';
import ReplyButton from '../block/ReplyButton.tsx';
import DeleteandEditButton from '../block/DeleteandEditButton.tsx';
import NewCommentForm from './NewCommentForm.tsx';
import { getLocalValue } from '../hooks/useLocalStorage.ts';
import SubmitButton from '../global/SubmitButton/SubmitButton.tsx';

interface CommentCardProps {
  comment: IComment | IReply;
  currentUser: IUser;
  setComments: (value: IComment[]) => void;
  mainCommentId: string | number;
}

const CommentCard = ({
  comment,
  currentUser,
  setComments,
  mainCommentId,
}: CommentCardProps) => {
  const isSelf = comment.user.username === currentUser.username;

  const [newReplyForm, setNewReplyForm] = useState<boolean>(false);
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [editingContent, setEditingContent] = useState<string>('');

  const updateScore = (increment: boolean) => {
    const comments = getLocalValue('comments');
    const newComments = comments.map(commentItem => {
      if (commentItem.id === comment.id) {
        return {
          ...commentItem,
          score: increment ? commentItem.score + 1 : commentItem.score - 1,
        };
      }
      return {
        ...commentItem,
        replies:
          commentItem.replies &&
          commentItem.replies.map(reply =>
            reply.id === comment.id
              ? {
                  ...reply,
                  score: increment ? reply.score + 1 : reply.score - 1,
                }
              : reply,
          ),
      };
    });
    setComments(newComments);
  };

  return (
    <div>
      <div className="bg-white p-4 rounded-lg flex flex-col sm:flex-row w-full">
        <div className="hidden sm:block sm:mr-4">
          <ScoreButton
            score={comment.score}
            onClick={{
              minus: () => updateScore(false),
              plus: () => updateScore(true),
            }}
          />
        </div>
        <div className="flex-grow">
          <div className="flex justify-between items-center mb-3">
            <ProfileSection
              image={comment.user.image.png}
              name={comment.user.username}
              createdAt={comment.createdAt}
              isSelf={isSelf}
            />
            <div className="hidden sm:block">
              {isSelf ? (
                <DeleteandEditButton
                  onClickEditButton={() => {
                    setIsEditable(!isEditable);
                    setEditingContent(comment.content);
                  }}
                  onClickDeleteButton={() => {
                    console.log('del');
                  }}
                />
              ) : (
                <ReplyButton
                  setNewReplyForm={setNewReplyForm}
                  newReplyForm={newReplyForm}
                />
              )}
            </div>
          </div>
          {isEditable ? (
            <div className="flex flex-col gap-2 content-end w-full">
              <textarea
                onChange={e => setEditingContent(e.target.value)}
                value={editingContent}
                className="border-solid border-2 rounded-lg border-grayish_blue w-full p-3"
                rows={3}
                placeholder="Add a comment.."
              />
              <SubmitButton
                content={'UPDATE'}
                onClick={() => setIsEditable(false)}
              />
            </div>
          ) : (
            <div className="text-gray-500 mb-4 sm:mb-0">
              {comment.replyingTo && (
                <span className="font-semibold mr-2 text-mid_blue">
                  @{comment.replyingTo}
                </span>
              )}
              {comment.content}
            </div>
          )}

          <div className="flex justify-between items-center sm:hidden mt-4">
            <ScoreButton
              score={comment.score}
              onClick={{
                minus: () => updateScore(false),
                plus: () => updateScore(true),
              }}
            />
            {isSelf ? (
              <DeleteandEditButton
                onClickEditButton={() => {
                  setIsEditable(!isEditable);
                  setEditingContent(comment.content);
                }}
                onClickDeleteButton={() => {
                  console.log('del');
                }}
              />
            ) : (
              <ReplyButton
                setNewReplyForm={setNewReplyForm}
                newReplyForm={newReplyForm}
              />
            )}
          </div>
        </div>
      </div>
      {newReplyForm && (
        <NewCommentForm
          user={currentUser}
          comments={getLocalValue('comments')}
          setComments={setComments}
          type="REPLY_COMMENT"
          replyTo={{
            replyId: mainCommentId,
            replyTo: comment.user.username,
          }}
          additionalFunction={() => setNewReplyForm(false)}
        />
      )}
    </div>
  );
};

export default CommentCard;

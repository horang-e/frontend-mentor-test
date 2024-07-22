import React from 'react';
import { IComment, IUser } from '../interface/type';
import ProfileSection from '../block/ProfileSection.tsx';
import ScoreButton from '../block/ScoreButton.tsx';
import ReplyButton from '../block/ReplyButton.tsx';
import DeleteandEditButton from '../block/DeleteandEditButton.tsx';

interface CommentCardProps {
  comment: IComment;
  currentUser: IUser;
}

const CommentCard = ({ comment, currentUser }: CommentCardProps) => {
  const isSelf = comment.user.username === currentUser.username;

  return (
    <div className="bg-white p-4 rounded-lg flex flex-col sm:flex-row w-full">
      <div className="hidden sm:block sm:mr-4">
        <ScoreButton
          score={comment.score}
          onClick={{
            minus: () => console.log('Minus'),
            plus: () => console.log('Plus'),
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
            {isSelf ? <DeleteandEditButton /> : <ReplyButton />}
          </div>
        </div>
        <div className="text-gray-500 mb-4 sm:mb-0">
          {comment.replyingTo && (
            <span className="font-semibold mr-2 text-mid_blue">
              @{comment.replyingTo}
            </span>
          )}
          {comment.content}
        </div>
        <div className="flex justify-between items-center sm:hidden mt-4">
          <ScoreButton
            score={comment.score}
            onClick={{
              minus: () => console.log('Minus'),
              plus: () => console.log('Plus'),
            }}
          />
          {isSelf ? <DeleteandEditButton /> : <ReplyButton />}
        </div>
      </div>
    </div>
  );
};

export default CommentCard;

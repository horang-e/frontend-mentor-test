import React from 'react';
import { IUser } from '../interface/type';
import ProfileSection from '../block/ProfileSection.tsx';

interface CommentCardProps {
  user: IUser;
  createdAt: string;
}

const CommentCard = (props: CommentCardProps) => {
  const { user, createdAt } = props;

  return (
    <div>
      <ProfileSection
        image={user.image.png}
        name={user.username}
        createdAt={createdAt}
      />
    </div>
  );
};

export default CommentCard;

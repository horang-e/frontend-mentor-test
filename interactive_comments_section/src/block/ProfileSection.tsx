import React from 'react';
import { formatRelativeDate } from '../util/util.ts';

interface ProfileSectionProps {
  image: string;
  name: string;
  createdAt: string;
  isSelf: boolean;
}

const ProfileSection = (props: ProfileSectionProps) => {
  const date = new Date(props.createdAt);
  const formattedDate = formatRelativeDate(date);

  return (
    <div className="flex gap-4 items-center">
      <img src={props.image} alt="Profile" className="w-8 h-8 rounded-full" />
      <p className="font-bold">{props.name}</p>
      {props.isSelf && (
        <p className="bg-mid_blue text-white px-1.5 rounded-sm font-semibold">
          you
        </p>
      )}
      <p className="text-grayish_blue">{formattedDate}</p>
    </div>
  );
};

export default ProfileSection;

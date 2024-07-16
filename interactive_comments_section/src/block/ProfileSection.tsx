import React from 'react';

interface ProfileSectionProps {
  image: string;
  name: string;
  createdAt: string;
}

const ProfileSection = (props: ProfileSectionProps) => {
  return (
    <div className="flex gap-4 items-center">
      <img src={props.image} alt="Profile" className="w-8 h-8 rounded-full" />
      <p className="font-bold">{props.name}</p>
      <p className="text-gray-500">{props.createdAt}</p>
    </div>
  );
};

export default ProfileSection;

import React, { useState } from 'react';
import { IUser } from '../interface/type';
import SubmitButton from '../global/SubmitButton/SubmitButton.tsx';

interface NewCommentFormProps {
  user: IUser;
}

const NewCommentForm = (props: NewCommentFormProps) => {
  const [content, setContent] = useState<string>('');

  return (
    <div className="bg-white p-4 rounded-lg flex w-full gap-4">
      <img
        src={props.user.image.png}
        alt="Profile"
        className="w-8 h-8 rounded-full "
      />
      <textarea
        onChange={e => setContent(e.target.value)}
        className="border-solid border-2 rounded-lg border-grayish_blue w-full p-3"
        rows={3}
      />
      <SubmitButton
        content="SEND"
        onClick={() => {
          console.log('e');
        }}
      />
    </div>
  );
};

export default NewCommentForm;

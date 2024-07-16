import React from 'react';
import data from '../data.json';
import CommentCard from '../components/CommentCard.tsx';

interface Props {
  someProp: string;
}

const Main = (props: Props) => {
  return (
    <div>
      {data.comments.map(comment => {
        return (
          <div key={comment.id}>
            <CommentCard user={comment.user} createdAt={comment.createdAt} />
          </div>
        );
      })}
    </div>
  );
};

export default Main;

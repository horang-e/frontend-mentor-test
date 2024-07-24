import '../types';
import React, { useContext } from 'react';
import { AddComment, CommentItem } from '../components';
import { CommentDataContext } from '../providers/CommentProvider';

/**
 * @returns {JSX.Element}
 */
export default function Main() {
  const data = useContext(CommentDataContext);

  return (
    <div className="bg-very-light-gray font-rubik text-div">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="space-y-4">
          {data.comments.map(comment => (
            <CommentItem key={comment.id} comment={comment} />
          ))}

          <AddComment currentUser={data.currentUser} />
        </div>
      </div>
    </div>
  );
}

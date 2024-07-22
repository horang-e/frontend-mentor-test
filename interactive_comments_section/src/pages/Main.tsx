import React from 'react';
import data from '../data.json';
import CommentCard from '../components/CommentCard.tsx';
import NewCommentForm from '../components/NewCommentForm.tsx';

interface Props {
  someProp: string;
}

const Main = (props: Props) => {
  return (
    <div className="w-full flex justify-center">
      <div className="md:p-10 p-4 flex flex-col gap-5 max-w-screen-md">
        {data.comments.map(comment => {
          return (
            <div key={comment.id}>
              <CommentCard comment={comment} currentUser={data.currentUser} />
              {comment.replies.length > 0 && (
                <div className="flex mt-5 ">
                  <div className="w-px bg-light_grayish_blue sm:mx-7 mr-3 ml-0"></div>
                  <div className="flex flex-col gap-5">
                    {comment.replies.map(reply => (
                      <CommentCard
                        comment={reply}
                        currentUser={data.currentUser}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
        <NewCommentForm user={data.currentUser} />
      </div>
    </div>
  );
};

export default Main;

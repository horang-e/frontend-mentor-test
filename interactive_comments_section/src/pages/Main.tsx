import React from 'react';
import data from '../data.json';
import CommentCard from '../components/CommentCard.tsx';
import NewCommentForm from '../components/NewCommentForm.tsx';
import { useLocalStorage } from '../hooks/useLocalStorage.ts';
import { IComment, IUser } from '../interface/type.ts';

interface Props {
  someProp: string;
}

const Main = (props: Props) => {
  const [comments, setComments] = useLocalStorage<IComment[]>(
    'comments',
    data.comments,
  );
  const [currentUser] = useLocalStorage<IUser>('currentUser', data.currentUser);

  return (
    <div className="w-full flex justify-center">
      <div className="md:p-10 p-4 flex flex-col gap-5 max-w-screen-md">
        {comments &&
          comments.map(comment => {
            return (
              <div key={comment.id}>
                <CommentCard
                  comment={comment}
                  currentUser={currentUser}
                  setComments={setComments}
                  mainCommentId={comment.id}
                />
                {comment.replies && comment.replies.length > 0 && (
                  <div className="flex mt-5 ">
                    <div className="w-px bg-light_grayish_blue sm:mx-7 mr-3 ml-0"></div>
                    <div className="flex flex-col gap-5">
                      {comment.replies.map(reply => (
                        <div key={reply.id}>
                          <CommentCard
                            comment={reply}
                            currentUser={data.currentUser}
                            setComments={setComments}
                            mainCommentId={comment.id}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        <NewCommentForm
          user={data.currentUser}
          comments={comments}
          setComments={setComments}
          type="NEW_COMMENT"
        />
      </div>
    </div>
  );
};

export default Main;

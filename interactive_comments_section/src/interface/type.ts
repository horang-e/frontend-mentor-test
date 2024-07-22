export interface IUser {
  image: {
    png: string;
    webp: string;
  };
  username: string;
}

export interface IReply extends IComment {
  replyingTo: string;
}

export interface IComment {
  user: IUser;
  content: string;
  createdAt: string;
  id: number;
  score: number;
  replyingTo?: string;
}

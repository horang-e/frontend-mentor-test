export interface IUser {
  image: {
    png: string;
    webp: string;
  };
  username: string;
}

export interface IBaseComment {
  id: number | string;
  content: string;
  createdAt: string;
  score: number;
  user: IUser;
  replyingTo?: string;
}

export interface IReply extends IBaseComment {
  replyingTo: string;
}

export interface IComment extends IBaseComment {
  replies?: IReply[];
}

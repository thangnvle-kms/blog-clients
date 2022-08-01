export interface Blog {
  id?: number;
  img?: string;
  shortDesc?: string;
  content?: string;
  createdAt?: Date;
  title?: string;
  createdBy?: string;
  commentProps: string;
}

export interface Detail {
  //blog: Blog
  blog: string;
}

export interface CommentDetail {
  comment?: Comment;
}

export interface CategoryModel {
  id: number;
  name: string;
  createdAt: Date;
  createdBy: string;
  deletedAt: Date;
}

export interface Category {
  id: number;
  name: string;
  createdAt: Date;
  createdBy: string;
  deletedAt: Date;
  post: [Post];
}

export interface Post {
  id: number;
  userId: number;
  title: string;
  shortDesc: string;
  content: string;
  img: string;
  createdAt: Date;
  createdBy: string;
  deletedAt: Date;
  comment: [Comment];
}

export interface Comment {
  id: number;
  userId: number;
  content: string;
  createdAt: Date;
  createdBy: string;
  deletedAt: Date;
}

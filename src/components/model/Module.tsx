export interface Blog {
    id?: number,
    img?: string,
    shortDesc?: string,
    content?: string,
    createdAt?: Date,
    title?: string,
    createdBy?: string,
    commentProps: string
}

export interface Detail {
    blog?: Blog
}

export interface Comment {
    id?: string,
    userId?: string,
    content?: string,
    createdAt?: string,
    createdBy?: string
}

export interface CommentDetail {
    comment?: Comment
}
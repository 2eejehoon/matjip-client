export type User = {
    id: number;
    email: string;
    password?: string;
    profile?: Profile;
    posts?: Post[];
    likes?: Like[];
    recommends?: Recommend[];
    createdAt: Date;
    updatedAt: Date;
};

export type Profile = {
    id: number;
    name: string;
    photo?: string;
    userId: number;
    user: User;
    createdAt: Date;
    updatedAt: Date;
};

export type Post = {
    id: number;
    title: string;
    content: string;
    author: User;
    authorId: number;
    comments: Comment[];
    likes: Like[];
    recommends: Recommend[];
    categoryId: number;
    category: Category;
    photos: Photo[];
    latitude: number;
    longitude: number;
    createdAt: Date;
    updatedAt: Date;
};

export type Photo = {
    id: number;
    post: Post;
    postId: number;
    filename: string;
    path: string;
    description: string;
    createdAt: Date;
};

export type Comment = {
    id: number;
    content: string;
    post: Post;
    postId: number;
    createdAt: Date;
    updatedAt: Date;
};

export type Like = {
    id: number;
    post: Post;
    postId: number;
    user: User;
    userId: number;
};

export type Recommend = {
    id: number;
    post: Post;
    postId: number;
    user: User;
    userId: number;
};

export type Category = {
    id: number;
    name: string;
    posts: Post[];
};

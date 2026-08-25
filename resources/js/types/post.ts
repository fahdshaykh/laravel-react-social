export interface Post {
    id: number;
    title: string;
    body: string;
    user_id: number;
    user?: User;
    created_at: string;
    updated_at: string;
    comments?: Comment[]
}

export interface User {
    id: number;
    name: string;
    email: string;
    created_at: string;
    updated_at: string;
    posts?: Post[],
    comments?: Comment[]
}

export interface Comment {
    id: number,
    body: string;
    created_at: string;
    updated_at: string;
    post_id: number;
    user_id: number;
    user?: User;
    post?: Post;
}


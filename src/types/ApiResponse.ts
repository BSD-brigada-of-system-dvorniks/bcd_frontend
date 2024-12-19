export interface UserResponse {
    id: string;
    username: string;
    email: string;
}


export interface ArticleBasicResponse {
    name: string;
    published: boolean;
}

export interface Article {
    name: string;
    text: string;
    author: UserResponse;
}

export interface ObjectBasicResponse {
    id: string;
    type: string;
    level: number;
    article: ArticleBasicResponse;
};

export interface ObjectsListResponse {
    objects: ObjectBasicResponse[];
}

export interface ObjectResponse {
    id: string;
    type: string;
    level: number;
    article: Article;
}

export interface LoginResponse {
    token: string;
    error: string;
}

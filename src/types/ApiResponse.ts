export interface Article {
    name: string;
    published: boolean;
}

export interface ObjectResponse{
    id : string;
    type: string;
    level: number;
    article: Article;
};

export type ObjectsResponse = ObjectResponse[];

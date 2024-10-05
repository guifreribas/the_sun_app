export interface Article {
    id: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    createdAt: Date;
    deletedAt?: Date;  
}
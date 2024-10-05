import { Article } from './article';

export interface Main extends Article {
  _id: string;
  articleId: string;
  prompt: String;
  summary: String;
  createdAt: Date;
  deletedAt: Date;
}

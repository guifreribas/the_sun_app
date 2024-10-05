import mongoose from "mongoose";
import mainArticle from "../DB/models/mainArticle.js";
import articleModel from "../DB/models/article.js";

const testArticleId = "6701b8d6fc784065532c0c84";

type MainArticle = {
  _id: mongoose.Types.ObjectId;
  article_id: mongoose.Types.ObjectId;
  title: String;
  description: String;
  url: String;
  urlToImage: String;
  prompt: String;
  summary: String;
  createdAt: Date;
  deletedAt: Date;
};

//Testing info

type dataToMain = {
  articleId: string;
  prompt: string;
  summary: string;
};

export const postMain = async (
  data: dataToMain
): Promise<MainArticle | null> => {
  const { articleId, prompt, summary } = data;

  const article = await articleModel.findById(articleId);

  if (!article) {
    throw new Error("Article not found");
  }

  const main = await mainArticle.create({
    article_id: article._id,
    title: article.title,
    description: article.description,
    url: article.url,
    urlToImage: article.urlToImage,
    prompt,
    summary,
  });

  if (!main) {
    // throw new Error('There is no main article available')
    return null;
  }

  return main;
};

export const getMain = async (): Promise<MainArticle | null> => {
  const main = await mainArticle.findById(testArticleId);
  console.log("main: ", main);
  if (!main) {
    // throw new Error('There is no main article available')
    return null;
  }

  return main;
};

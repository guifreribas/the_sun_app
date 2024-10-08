import mongoose from "mongoose";
import mainArticle from "../DB/models/mainArticle.js";
import articleModel from "../DB/models/article.js";

const testArticleId = "67025c41ccdeb8c80343dee3";

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
  const existingMain = await mainArticle.findOne({ article_id: article._id });

  if (existingMain) {
    return null;
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
    console.error("There is no main article available");
    return null;
  }

  return main;
};

export const getMain = async (): Promise<MainArticle | null> => {
  const main = await mainArticle.findById(testArticleId);
  console.log("main: ", main);
  if (!main) {
    console.error("There is no main article available");
    return null;
  }

  return main;
};
export const modify = async (data: dataToMain): Promise<MainArticle | null> => {
  const { articleId, prompt, summary } = data;

  const main = await mainArticle.findById(testArticleId);
  if (!main) {
    console.error("error in modify service");
    return null;
  }

  const updated = await mainArticle.findByIdAndUpdate(
    articleId,
    { $set: { prompt, summary } },
    { new: true }
  );
  return updated;
};

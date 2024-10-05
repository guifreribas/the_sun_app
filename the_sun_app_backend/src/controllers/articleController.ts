import { Request, Response } from "express";
import { create, getAll, getOne } from "../services/articleService.js";
import mongoose from "mongoose";

export default class ArticleController {
  public async createArticle(req: Request, res: Response) {
    const { title, url, description, urlToImage } = req.body;
    if (!title || !url || !description || !urlToImage) {
      res.status(400).json({ message: "All fields are required" });
      return;
    }
    try {
      const article = await create(title, url, description, urlToImage);
      //return res.status(201).json(article);
      if (!article) {
        res.status(404).json({ message: "Article not found" });
        return;
      }

      res.status(200).json({
        id: article._id,
        title: article.title,
        description: article.description,
        url: article.url,
        urlToImage: article.urlToImage,
        createdAt: article.createdAt,
      });
      return;
    } catch (error) {
      console.error("Error creating article:", error);
      res.status(500).json({ message: "Error creating article" });
      return;
    }
  }
  public async getAllArticles(_: Request, res: Response) {
    try {
      const articles = await getAll();
      if (!articles || articles.length === 0) {
        res.status(200).json({ message: "No articles found", results: [] });
        return;
      }
      res.json({
        message: "Articles found",
        results: articles.map((article) => ({
          id: article._id,
          title: article.title,
          description: article.description,
          url: article.url,
          urlToImage: article.urlToImage,
          createdAt: article.createdAt,
        })),
      });
      return;
    } catch (error) {
      console.error("Error getting all articles:", error);
      res.status(500).json({ message: "Error getting all articles" });
      return;
    }
  }
  public async getOneArticle(req: Request, res: Response) {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({ message: "Article ID is required" });
      return;
    }
    try {
      const article = await getOne(id as unknown as mongoose.Types.ObjectId);
      if (!article) {
        res.status(404).json({ message: "Article not found" });
        return;
      }
      res.status(200).json({
        id: article._id,
        title: article.title,
        description: article.description,
        url: article.url,
        urlToImage: article.urlToImage,
        createdAt: article.createdAt,
      });
      return;
    } catch (error) {
      console.error("Error getting article:", error);
      res.status(500).json({ message: "Error getting article" });
      return;
    }
  }
}

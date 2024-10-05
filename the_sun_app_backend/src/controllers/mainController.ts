//import mongoose from "mongoose";
import { Request, Response } from "express";
import { postMain, getMain } from "../services/mainServices.js";

export default class MainController {
  async createMainArticle(req: Request, res: Response): Promise<void> {
    const { articleId, prompt, summary } = req.body;
    console.log("body: ", articleId, prompt, summary);
    if (!articleId || !prompt || !summary) {
      res.status(400).json({ message: "All fields are required" });
      return;
    }
    try {
      const data = { articleId, prompt, summary };
      const newMainArticle = await postMain(data);

      if (!newMainArticle) {
        res.status(400).json({ message: "Invalid data" });
        return;
      }

      res
        .status(201)
        .json({ message: "Updated article", data: newMainArticle });
      return;
    } catch (error) {}
  }
  async getMainArticle(req: Request, res: Response): Promise<void> {
    try {
      const mainArticle = await getMain();
      console.log("main article data", mainArticle);
      if (!mainArticle) {
        res.status(404).json({ message: "No main article found" });
        return;
      }
      res.status(200).json({ message: "Main article", data: mainArticle });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

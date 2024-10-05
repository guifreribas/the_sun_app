//import mongoose from "mongoose";
import { Request, Response } from "express";
import { postMain } from "../services/mainServices.js";

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
}

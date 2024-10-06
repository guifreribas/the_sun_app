//import mongoose from "mongoose";
import { Request, Response } from "express";
import { postMain, getMain } from "../services/mainServices.js";
import { OK } from "../constants/http.js";

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
  public static formatDateForURL(date: string): string {
    const [month, day, year] = date.split("-");
    const urlBase = `https://sdo.gsfc.nasa.gov/assets/img/browse/${year}/${month}/${day}/${year}${month}${day}_000411_1024_HMI171.jpg`;
    return urlBase;
  }
  async getUrlFromUser(req: Request, res: Response): Promise<void> {
    const { date } = req.params;
    if (!date) {
      res.status(400).json({ message: "URL is required" });
    }
    const url = MainController.formatDateForURL(date);
    res.status(OK).json(url);
  }
}

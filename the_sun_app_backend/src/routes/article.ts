import { Router } from "express";
import ArticleController from "../controllers/articleController.js";
import MainController from "../controllers/mainController.js";

const articleRouter = Router();

const articleController = new ArticleController();
const mainController = new MainController();

articleRouter.get("/articles", articleController.getAllArticles);
articleRouter.get("/article/:id", articleController.getOneArticle);
articleRouter.get("/main/article", mainController.getMainArticle);
articleRouter.post("/publish/article", articleController.createArticle);
articleRouter.post("/publish/main", mainController.createMainArticle);
// articleRouter.patch("/modify/main", mainController.modifyMainArticle);
articleRouter.get("/main/article", mainController.getMainArticle);
articleRouter.get("/sunpics/:date", mainController.getUrlFromUser);

export default articleRouter;

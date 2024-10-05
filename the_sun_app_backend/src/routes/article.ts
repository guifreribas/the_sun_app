import { Router } from "express";
import ArticleController from "../controllers/articleController.js";
import MainController from "../controllers/mainController.js";

const articleRouter = Router();

const articleController = new ArticleController();
const mainController = new MainController();

articleRouter.get("/articles", articleController.getAllArticles);
articleRouter.get("/article/:id", articleController.getOneArticle);
articleRouter.get(
  "/main/article"
  //crear controlador getMainArt
  //devuelve objeto type MainArticle
  //res.body = data
  //res.status = 200
);
articleRouter.post("/publish/article", articleController.createArticle);
articleRouter.post("/publish/main", mainController.createMainArticle);
articleRouter.get(
  "/sunpics/:date"
  //pasar fecha por req.params
  //devuelve url de la imagen, generado para hacer llamada desde el front.
  //res.body = { url: string }
  // res.status = 200
);

export default articleRouter;

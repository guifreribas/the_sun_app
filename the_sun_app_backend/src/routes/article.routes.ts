import { Router } from "express";
import ArticleController from "../controllers/articleController.js";

const articleRouter = Router();

const articleController = new ArticleController();

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
articleRouter.post(
  "/publish/main"
  //crear controlador para crear nuevo articulo principal
  //res.body = { prompt: string, summary: string }
  //res.status = 204
);
articleRouter.get(
  "/sunpics/:date"
  //pasar fecha por req.params
  //devuelve url de la imagen, generado para hacer llamada desde el front.
  //res.body = { url: string }
  // res.status = 200
);

export default articleRouter;

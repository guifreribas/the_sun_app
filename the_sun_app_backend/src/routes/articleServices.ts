import { Router } from "express";

const articleRouter = Router();

articleRouter.get("/articles"
    //crear controlador getAllArts
    //data: articleSchema[] (un array con objetos de tipo articulo)
    //res.body = data : 
    //res.status = 204 :
);
articleRouter.get("/article/:id"
    //crear controlador getArticle
    //objeto type Article
    //res.body = data : 
    //res.status = 204 : 
)
articleRouter.get("/main/article"   
    //crear controlador getMainArt
    //devuelve objeto type MainArticle
    //res.body = data
    //res.status = 200
)
articleRouter.post("/publish/article"
    //crear controlador para crear articulo nuevo uploadArt
    //res.body = { message: "Article uploaded successfuly"}
    //res.status = 204  
)
articleRouter.post("/publish/main"
    //crear controlador para crear nuevo articulo principal
    //res.body = { prompt: string, summary: string }
    //res.status = 204
)
articleRouter.get("/sunpics/:date"
    //pasar fecha por req.params
    //devuelve url de la imagen, generado para hacer llamada desde el front. 
    //res.body = { url: string }
    // res.status = 200
)

export default articleRouter;
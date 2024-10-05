import express from "express"
import logger from "morgan";
import connectToMongoDB from "./src/DB/connectToMongo.js";
import cors from 'cors'

const app = express();
const PORT = process.env.PORT || 3000;

const HOST = `http://localhost:${PORT}`;
const METHODS = [ 'GET', 'POST' ];



//middlewares
app.use(express.json())
app.use(logger('dev'))
app.use(express.urlencoded({extended: false}))
app.use('api/v1/')
app.use(cors({
    origin: HOST,
    methods: METHODS
}))

//routes
//traer todos los articulos
app.get('/articles', (req, res) => {

    //crear controlador getAllArts


    //data: articleSchema[] (un array con objetos de tipo articulo)

    //res.body = data : 
    //res.status = 204 : 
})


//traer un articulo por id
app.get('/article/:id', (req, res) => {


    //crear controlador getArticle
    
//objeto type Article

    //res.body = data : 
    //res.status = 204 : 
})


//traer articulo principal
app.get('/main/article', (req, res) => {
    
    //crear controlador getMainArt


    //devuelve objeto type MainArticle

    //res.body = data
    //res.status = 200
})


//crear un articulo nuevo
app.post('/publish/article', (req, res) => {
    //crear controlador para crear articulo nuevo uploadArt

    //res.body = { message: "Article uploaded successfuly"}
    //res.status = 204

})


//crear main article segun id
app.post('/publish/main', (req, res) => {
    //crear controlador para crear nuevo articulo principal



    //res.body = { prompt: string, summary: string }
    //res.status = 204
})


//traer imagen segun fecha enviada.
app.get('/sunpics/:date', (req, res) => {

    //pasar fecha por req.params


    //devuelve url de la imagen, generado para hacer llamada desde el front. 

    //res.body = { url: string }
    // res.status = 200
})


//listen & connect to db
app.listen(
    PORT,
    () => {
        connectToMongoDB()
        console.log(`Server running on port ${PORT}`)
    }
)
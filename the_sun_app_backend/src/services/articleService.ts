
import mongoose from "mongoose"
import articleModel from "../DB/models/article.js"

//esquema de articulo
export type Article = {
    _id: mongoose.Types.ObjectId,
    title: String,
    description: String,
    url: String,
    urlToImage: String,
    createdAt: NativeDate,
    deletedAt: NativeDate,
}

//test articles
// const testArticle : Article = {
//     _id: '123456789',
//     title: 'titulo',
//     description: 'soy una descripcion',
//     url: 'Soy un link a un articulo muy chulo',
//     urlToImage: 'Aqui la imagen...',
//     createdAt: new Date(),
//     deletedAt:  new Date(),
// }

//obtener todos los articulos

export const getAll = async () : Promise<[] | Promise<Article[]>> => {

     const articles = await articleModel.find()
        
    if(!articles) {
        
        console.error('Problem getting all users')
        return []
    }

    return (articles)
}

//obtener articulo con id

export const getOne = async (_id: mongoose.Types.ObjectId): Promise<Article | null> => {
    
    const article = await articleModel.findById(_id)

    if (!article){
        throw new Error('User not found')
    }

    return article
}

export const create = async ( title: string, url: string, description: string, urlToImage: string): Promise<Article | null> => {

    const newArticle = { title, description, url, urlToImage }


    const id = await articleModel.create(newArticle)

    if(!id){
        throw new Error('Error posting article')
    }

    return id
}


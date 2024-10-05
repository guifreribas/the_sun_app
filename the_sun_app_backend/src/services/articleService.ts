


//esquema de articulo

import mongoose from "mongoose"
import articleModel from "../DB/models/article.js"

type Article = {
    id: mongoose.Types.ObjectId,
    title: String,
    description: String,
    url: String,
    urlToImage: String,
    createdAt: NativeDate,
    deletedAt: NativeDate,
}

//test articles


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

export const getOne = async (id: string) => {
    
}


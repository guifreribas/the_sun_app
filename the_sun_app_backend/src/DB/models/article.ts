import mongoose from "mongoose";

//crear documento 

interface ArticleDocument extends mongoose.Document{
    _id: mongoose.Types.ObjectId,
    title: String,
    description: String,
    url: String,
    urlToImage: String,
    createdAt: Date,
    deletedAt: Date,
}

const articleSchema = new mongoose.Schema({
    title: { type: String, required: true},
    description: { type: String, required: true},
    url: { type: String, required: true},
    urlToImage: { type: String, required: true},
    createdAt: { type: Date},
    deletedAt: { type: Date},
},
{ timestamps: true }
);


//crear modelo con documento y esquema
const articleModel = mongoose.model<ArticleDocument>("Article", articleSchema);
export default articleModel;

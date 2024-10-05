import mongoose from "mongoose";

interface MainArticleDocument extends mongoose.Document {
   _id: mongoose.Types.ObjectId,
   article_id: mongoose.Types.ObjectId,
   title: String,
   description: String,
   url: String,
   urlToImage: String,
   prompt: String,
   summary: String,
   createdAt: Date,
   deletedAt: Date
}

const mainArticleSchema = new mongoose.Schema({
    article_id: {
        ref: "Article",
        type: mongoose.Types.ObjectId,
        index: true
    },
    title: { type: String, required: true},
    description: { type: String, required: true},
    url: { type: String, required: true},
    urlToImage: { type: String, required: true},
    prompt: { type: String, required: true},
    summary: { type: String, required: true},
    createdAt: { type: Date},
    deletedAt: { type: Date, default: null}
}, { timestamps: true }
);

const mainArticle = mongoose.model<MainArticleDocument>("MainArticle", mainArticleSchema);
export default mainArticle;
import mongoose from "mongoose";

interface MainArticleDocument extends mongoose.Document {
   _id: mongoose.Types.ObjectId,
   articleId: mongoose.Types.ObjectId,
   prompt: String,
   summary: String,
   createdAt: Date,
   deletedAt: Date


}

const mainArticleSchema = new mongoose.Schema({
    articleId: {
        ref: "Article",
        type: mongoose.Types.ObjectId,
        index: true
    },
    prompt: { type: String, required: true},
    summary: { type: String, required: true},
    createdAt: { type: Date},
    deletedAt: { type: Date, default: null}
}, { timestamps: true }
);

const mainArticle = mongoose.model<MainArticleDocument>("MainArticle", mainArticleSchema);
export default mainArticle;
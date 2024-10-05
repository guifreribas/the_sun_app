import mongoose from "mongoose";


const mainArticleSchema = new mongoose.Schema({
    articleId: {
        ref: "Article",
        type: mongoose.Types.ObjectId,
        index: true
    },
    prompt: { type: String, required: true},
    summary: { type: String, required: true},
    createdAt: { type: Date},
    deletedAt: { type: Date}
}, { timestamps: true }
);

const mainArticle = mongoose.model("MainArticle", mainArticleSchema);
export default mainArticle;
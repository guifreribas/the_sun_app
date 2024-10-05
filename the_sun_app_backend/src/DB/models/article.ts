import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
    id: {type: mongoose.Types.ObjectId, required: true},
    title: { type: String, required: true},
    description: { type: String, required: true},
    url: { type: String, required: true},
    urlToImage: { type: String, required: true},
    createdAt: { type: Date},
    deletedAt: { type: Date},
},
{ timestamps: true }
);

const articleModel = mongoose.model("Article", articleSchema);
export default articleModel;
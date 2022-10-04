import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  name: String,
  question: String,
  upvotes: Number,
});

export default mongoose.model("Post", postSchema);

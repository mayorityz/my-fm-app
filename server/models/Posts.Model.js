const DB = require("mongoose");

const postSchema = new DB.Schema({
  postedBy: String,
  postDate: {
    type: Date,
    default: Date.now,
  },
  title: String,
  content: String,
  category: String,
  replies: { type: Array, default: [] },
  postSlug: String,
  likes: { type: Array, default: [] },
  dislikes: { type: Array, default: [] },
});

const Posts = DB.model("posts", postSchema);

module.exports = Posts;

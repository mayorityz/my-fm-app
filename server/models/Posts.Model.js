const DB = require("mongoose");

const postSchema = new DB.Schema({
  postedBy: String,
  postDate: {
    type: Date,
    default: Date.now,
  },
  title: String,
  content: String,
  replays: { type: Array, default: [] },
});

const Posts = DB.model("Accounts", postSchema);

module.exports = Posts;

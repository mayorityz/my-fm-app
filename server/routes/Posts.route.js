const express = require("express");
const Router = express.Router();
const postController = require("./../controllers/Post.Controller");
const middleware = require("./../middlewares/AUTHORIZATION");

Router.post(
  "/create-new-post",
  middleware.VerifyCookie,
  postController.newPost
);
Router.post("/get-all-posts", postController.postByCat);
Router.post("/readposts", postController.readPost);

module.exports = Router;

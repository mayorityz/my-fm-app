const express = require("express");
const Router = express.Router();
const postController = require("./../controllers/Post.Controller");

Router.post("/create-new-post", postController.newPost);

module.exports = Router;

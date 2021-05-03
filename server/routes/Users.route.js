const express = require("express");
const Router = express.Router();
const userController = require("./../controllers/User.Controller");

Router.post("/create-new-account", userController.newuser);
Router.post("/user-login", userController.login);

module.exports = Router;

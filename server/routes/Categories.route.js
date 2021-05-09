const express = require("express");
const Router = express.Router();

const controller = require("./../controllers/Categories.controller");

Router.post("/create-category", controller.CreateCat);
Router.get("/list-of-categories", controller.getAll);

module.exports = Router;

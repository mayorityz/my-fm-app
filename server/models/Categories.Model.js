const DB = require("mongoose");

const categorySchema = new DB.Schema({
  title: String,
  description: String,
});

const Categories = DB.model("Categories", categorySchema);

module.exports = Categories;

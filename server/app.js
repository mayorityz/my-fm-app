const express = require("express");
const cors = require("cors");
const app = express();
const Port = process.env.PORT || 3300;
const cookieParser = require("cookie-parser");
const DATABASE = require("./helpers/Database");
const USERAUTHMIDDLEWARE = require("./middlewares/AUTHORIZATION");

var origin_ = process.env.NODE_ENV
  ? "http://yoruba-community.herokuapp.com/"
  : "http://localhost:3000";

app.use(cors({ credentials: true, origin: origin_ }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", origin_);
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/tes", (req, res) => {
  res.send("here we are!!!");
});

app.use("/api/v1/userauth/", require("./routes/Users.route"));
app.use("/api/v1/utilities", require("./routes/Categories.route"));
app.use("/api/v1/posts", require("./routes/Posts.route"));

// catch undefined routes and respond with 404
app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

// catch server errors and respond with 500
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// server
DATABASE.then(() => {
  console.log("db is connected");
  app.listen(Port, () => {
    console.log(`running on port:${Port}`);
  });
}).catch((err) => {
  console.log(err);
});

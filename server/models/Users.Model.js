const DB = require("mongoose");

const userSchema = new DB.Schema({
  username: String,
  email: String,
  password: String,
  date_joined: {
    type: Date,
    default: Date.now,
  },
});

const User = DB.model("Accounts", userSchema);

module.exports = User;

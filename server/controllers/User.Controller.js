const userModel = require("../models/Users.Model");
const hasher = require("../helpers/Hash");
const jwt = require("../helpers/TokenManagement");

exports.newuser = async (req, res) => {
  const { email, username, password } = req.body;
  try {
    const encryptedValue = hasher.encrypt_(password);
    const create = new userModel({ email, username, password: encryptedValue });
    create.save((err, docx) => {
      if (err)
        res
          .status(200)
          .json({ status: false, message: "Err Saving New User!" });
      else
        res.status(200).json({
          status: true,
          message: "Your Account Was Created Successfully!",
        });
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  console.log(username + password);
  try {
    //! check username
    //! compare password
    await userModel.findOne({ username }, (err, docx) => {
      if (docx === null) {
        res
          .status(200)
          .json({ status: "failed", message: "Valid Credentials" });
        return;
      } else {
        const { password: hash } = docx;
        const passwordValidation = hasher.checkPassWord(password, hash);
        //!generate Token.

        if (passwordValidation) {
          const token = jwt.generateToken(docx);
          res
            .status(200)
            .cookie("user_access_token", token, {
              sameSite: "strict",
              path: "/",
              expires: new Date(new Date().getTime() + 40000 * 1000),
              httpOnly: true,
            })
            .json({ status: "success", token, message: "Login Successful." });
          return;
        } else {
          res
            .status(200)
            .json({ status: "failed", message: "Valid Credentials" });
          return;
        }
      }
    });
  } catch (error) {
    console.log(error.message);
  }
};

const tokenManager = require("./../helpers/TokenManagement");
const jwt = require("jsonwebtoken");

exports.VerifyCookie = async (req, res, next) => {
  try {
    const token = req.cookies.user_access_token;
    if (token === undefined)
      return res.status(200).send("User Session Expired!!!");
    else {
      // req.userDetails = tokenManager.verifyToken(token);
      jwt.verify(token, "privateKeyTokenGenerateHere", (er, result) => {
        if (er)
          res
            .status(200)
            .json({ status: "failed", message: "Authorization Failed..." });
        else {
          req.userDetails = result.data;
          next();
        }
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

exports.decodeToken = async (req, res, next) => {
  try {
    const verify = tokenManager.verifyToken(req.cookie.user_access_token);
    console.log(verify);
    console.log(req.cookies.user_access_token);
  } catch (error) {
    console.log(error);
  }
};

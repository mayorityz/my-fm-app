const jwt = require("jsonwebtoken");

exports.generateToken = (data) => {
  try {
    const generatedToken = jwt.sign({ data }, "privateKeyTokenGenerateHere", {
      expiresIn: "72h",
    });
    return generatedToken;
  } catch (error) {
    console.log("Token err Res : " + error.message);
  }
};

exports.verifyToken = (data) => {};

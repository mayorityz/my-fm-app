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

exports.verifyToken = (token) => {
  try {
    jwt.verify(token, "privateKeyTokenGenerateHere", (err, result) => {
      // if (err === null) {
      //   return new Error();
      // } else {
      //   return result;
      // }
      console.log(result);
      return result;
    });
  } catch (error) {
    console.log(error);
  }
};

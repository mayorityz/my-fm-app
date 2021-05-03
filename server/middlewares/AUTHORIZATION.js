exports.VerifyCookie = async (req, res, next) => {
  try {
    console.log(req.headers);
    const token = req.cookies.user_access_token;
    if (token === undefined)
      return res.status(200).send("User Session Expired!!!");
    next();
  } catch (error) {
    console.log(error.message);
  }
};

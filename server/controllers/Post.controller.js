const PostModel = require("./../models/Posts.Model");

exports.newPost = async (req, res) => {
  const { title, content } = req.body;
  const username = req.user.username;

  try {
    const newPost = new PostModel({ title, content, username });
    newPost.save((er, docx) => {
      if (er)
        res
          .status(400)
          .json({
            status: "failed",
            message: "An Error Occured While Saving Please Try Again!",
          });
      else
        res
          .status(200)
          .json({
            status: "success",
            message: "New Post Created Successfully",
          });
    });
  } catch (error) {
    console.log(error);
  }
};

exports.readPost = (req, res) => {};
exports.deletePost = (req, res) => {};
exports.replyPost = (req, res) => {};
exports.editPost = (req, res) => {};

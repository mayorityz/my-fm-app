const PostModel = require("./../models/Posts.Model");
const slugHelper = require("./../helpers/helper");

exports.newPost = async (req, res) => {
  const { title, content, category } = req.body;
  const { email, username } = req.userDetails;
  let postSlug = slugHelper.slug(title);
  console.log(postSlug);
  try {
    const newPost = new PostModel({
      title,
      content,
      category,
      username,
      postSlug,
      postedBy: username,
    });
    newPost.save((er, docx) => {
      if (er)
        res.status(400).json({
          status: "failed",
          message: "An Error Occured While Saving Please Try Again!",
        });
      else
        res.status(200).json({
          status: "success",
          message: "New Post Created Successfully",
        });
    });
  } catch (error) {
    console.log(error);
  }
};

exports.postByCat = async (req, res) => {
  const { category } = req.body;

  const query = PostModel.find({ category: category }, (er, result) => {
    res.status(200).send(result);
  });
};

exports.readPost = (req, res) => {
  const { postid } = req.body;
  console.log(postid);
  const query = PostModel.findOne({ postSlug: postid }, (er, result) => {
    res.status(200).send(result);
  });
};
exports.deletePost = (req, res) => {};
exports.replyPost = (req, res) => {};
exports.editPost = (req, res) => {};

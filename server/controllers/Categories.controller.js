const CatModel = require("./../models/Categories.Model");

exports.CreateCat = async (req, res) => {
  const { title, description } = req.body;
  try {
    const newCat = new CatModel({ title, description });
    newCat.save((er, docx) => {
      if (er) {
        res.status(200).json({ status: "failed", message: "Database Error" });
      } else {
        res.status(200).json({
          status: "success",
          message: "Category Created Successfully ...",
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getAll = (req, res) => {
  try {
    const categories = CatModel.find({}, (err, docx) => {
      res.status(200).json(docx);
    });
  } catch (error) {
    console.log(error);
  }
};

const HomeModel = require("../models/HouseModel.js");

exports.getUserHome = getUserHome = async (req, res) => {
  const home = await HomeModel.find();
  res.json(home);
  // console.log(data);
};
exports.userrentedhouse = userrentedhouse = async (req, res) => {
  const id = req.params.id;
  const home = await HomeModel.find({ currentlyRenting: id });
  res.json(home);
};

exports.setUserRent = setUserRent = async (req, res) => {
  const updateHome = req.body;

  const updatedHome = await HomeModel.findOneAndUpdate(
    { _id: updateHome._id },
    { currentlyRenting: updateHome.user_id, status: "true" },
    {
      new: true,
    }
  );

  // const postMessages = await DetailsModel.findOneAndUpdate(
  //   { detailsId: 1234 },
  //   post,
  //   {
  //     new: true,
  //   }
  // );
  res.json({ message: "done" });
};

exports.searchHome = searchHome = async (req, res) => {
  const { area } = req.params;
  const homes = await HomeModel.find({
    area: { $regex: "^" + area, $options: "i" },
  });

  res.status(200).json({ homes: homes });
};

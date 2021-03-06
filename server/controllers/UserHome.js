const HomeModel = require("../models/HouseModel.js");

exports.getUserHome = getUserHome = async (req, res) => {
  const home = await HomeModel.find();
  res.json(home);
  // console.log(data);
};

exports.searchHome = searchHome = async (req, res) => {
  const { area } = req.params;
  const homes = await HomeModel.find({
    area: { $regex: "^" + area, $options: "i" },
  });

  res.status(200).json({ homes: homes });
};

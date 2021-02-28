const HomeModel = require("../models/HouseModel.js");

exports.getUserHome = getUserHome = async (req, res) => {
  const home = await HomeModel.find();
  res.json(home);
  // console.log(data);
};

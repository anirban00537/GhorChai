const HomeModel = require("../models/HouseModel.js");

exports.getOwnerHome = getOwnerHome = async (req, res) => {
  const info = req.body;
  const homeResult = HomeModel.find({ homeOwner: info });
  res.json(homeResult);
};

exports.postOwnerHome = postOwnerHome = async (req, res) => {
  try {
    const ownerData = req.body;
    const newHouseCreate = new HomeModel(ownerData);
    newHouseCreate.save();
    res.status(201).json({ data: "New house has successfully been created" });
    console.log("created home");
  } catch (error) {
    res.json({ error: error.message });
  }
};

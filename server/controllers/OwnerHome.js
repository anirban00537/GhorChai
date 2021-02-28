const HomeModel = require("../models/HouseModel.js");

exports.getOwnerHome = getOwnerHome = async (req, res) => {
  const { id } = req.params;
  const home = await HomeModel.find({ homeOwner: id });
  res.json(home);
  // console.log(data);
};

exports.postOwnerHome = postOwnerHome = async (req, res) => {
  try {
    const { home, photo } = req.body;
    const {
      title,
      description,
      address,
      price,
      area,
      nid,
      phone,
      homeOwner,
    } = home;

    const newHouseCreate = new HomeModel({
      title: title,
      description: description,
      address: address,
      price: price,
      area: area,
      nid: nid,
      phone: phone,
      homeOwner: homeOwner,
      photo: photo,
    });

    newHouseCreate.save();

    res.status(201).json({ data: "New house has successfully been created" });
    console.log("created home");
  } catch (error) {
    res.json({ error: error.message });
  }
};

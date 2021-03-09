const express = require("express");
const {
  getUserHome,
  searchHome,
  setUserRent,
  userrentedhouse,
} = require("../controllers/UserHome.js");

const router = express.Router();
router.get("/gethome", getUserHome);
router.get("/searchHome/:area", searchHome);
router.patch("/setrent", setUserRent);
router.get("/userrentedhouse/:id", userrentedhouse);
module.exports = router;

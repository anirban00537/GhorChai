const express = require("express");
const { getUserHome, searchHome } = require("../controllers/UserHome.js");

const router = express.Router();
router.get("/gethome", getUserHome);
router.get("/searchHome/:area", searchHome);
module.exports = router;

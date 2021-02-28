const express = require("express");
const { getUserHome } = require("../controllers/UserHome.js");

const router = express.Router();
router.get("/gethome", getUserHome);

module.exports = router;

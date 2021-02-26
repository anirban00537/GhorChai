const express = require("express");
const { postOwnerHome, getOwnerHome } = require("../controllers/OwnerHome");

const router = express.Router();
router.get("/", getOwnerHome);
router.post("/", postOwnerHome);

module.exports = router;

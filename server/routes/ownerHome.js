const express = require("express");
const {
  postOwnerHome,
  getOwnerHome,
  deleteHome,
} = require("../controllers/OwnerHome");

const router = express.Router();
router.get("/:id", getOwnerHome);
router.delete("/:id", deleteHome);
router.post("/", postOwnerHome);

module.exports = router;

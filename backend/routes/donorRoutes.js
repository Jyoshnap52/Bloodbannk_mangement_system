const express = require("express");
const { addDonor, getDonors } = require("../controllers/donorController");
const router = express.Router();

router.post("/", addDonor);
router.get("/", getDonors);

module.exports = router;

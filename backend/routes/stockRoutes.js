const express = require("express");
const { addStock, getStock, updateStock } = require("../controllers/stockController");
const router = express.Router();

router.post("/", addStock);
router.get("/", getStock);
router.put("/:id", updateStock);

module.exports = router;

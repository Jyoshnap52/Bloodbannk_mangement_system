const express = require("express");
const { createRequest, getRequests, updateStatus } = require("../controllers/requestController");
const router = express.Router();

router.post("/", createRequest);
router.get("/", getRequests);
router.put("/:id", updateStatus);

module.exports = router;

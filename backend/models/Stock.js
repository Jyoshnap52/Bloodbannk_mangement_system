const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema({
  bloodGroup: { type: String, required: true },
  units: { type: Number, required: true, default: 0 },
});

module.exports = mongoose.model("Stock", stockSchema);

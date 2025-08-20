const Stock = require("../models/Stock");

// Add stock
exports.addStock = async (req, res) => {
  try {
    const stock = await Stock.create(req.body);
    res.json(stock);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all stock
exports.getStock = async (req, res) => {
  try {
    const stock = await Stock.find();
    res.json(stock);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update stock units
exports.updateStock = async (req, res) => {
  try {
    const stock = await Stock.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(stock);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

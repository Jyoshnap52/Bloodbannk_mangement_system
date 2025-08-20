const BloodRequest = require("../models/BloodRequest");

// Create a request
exports.createRequest = async (req, res) => {
  try {
    const request = await BloodRequest.create(req.body);
    res.json(request);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all requests
exports.getRequests = async (req, res) => {
  try {
    const requests = await BloodRequest.find();
    res.json(requests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update request status
exports.updateStatus = async (req, res) => {
  try {
    const request = await BloodRequest.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(request);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const Donor = require("../models/Donor");

// Add Donor
exports.addDonor = async (req, res) => {
  try {
    const donor = await Donor.create(req.body);
    res.json(donor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get All Donors
exports.getDonors = async (req, res) => {
  try {
    const donors = await Donor.find();
    res.json(donors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

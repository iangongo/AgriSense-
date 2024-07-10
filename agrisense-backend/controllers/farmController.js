const Farm = require('../models/Farm');

exports.getFarms = async (req, res) => {
  const farms = await Farm.findAll();
  res.json(farms);
};

exports.createFarm = async (req, res) => {
  const { location, owner } = req.body;
  const newFarm = await Farm.create({ location, owner });
  res.json(newFarm);
};

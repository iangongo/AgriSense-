const Field = require('../models/Field');

exports.getFields = async (req, res) => {
  const fields = await Field.findAll();
  res.json(fields);
};

exports.createField = async (req, res) => {
  const { cropType, soilType, farmId } = req.body;
  const newField = await Field.create({ cropType, soilType, farmId });
  res.json(newField);
};


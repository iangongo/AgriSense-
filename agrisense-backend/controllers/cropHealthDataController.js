const CropHealthData = require('../models/CropHealthData');

exports.getCropHealthData = async (req, res) => {
  const cropHealthData = await CropHealthData.findAll();
  res.json(cropHealthData);
};

exports.createCropHealthData = async (req, res) => {
  const { moistureLevel, diseaseStatus, fieldId } = req.body;
  const newCropHealthData = await CropHealthData.create({ moistureLevel, diseaseStatus, fieldId });
  res.json(newCropHealthData);
};


const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const CropHealthData = sequelize.define('CropHealthData', {
  timestamp: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  moistureLevel: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  diseaseStatus: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fieldId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {});

module.exports = CropHealthData;


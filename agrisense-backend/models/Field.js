const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Field = sequelize.define('Field', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  cropType: {
    type: DataTypes.STRING,
    allowNull: false
  },
  soilType: {
    type: DataTypes.STRING,
    allowNull: false
  },
  farmId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {});

module.exports = Field;


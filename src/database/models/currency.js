
  
const { DataTypes } = require('sequelize');
const { sequelize } = require('./../index');
const AirlineBranch = require('./newAirlineBranch');

const Currency = sequelize.define('Currency', 
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
  },
    currencyCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    currencyName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tags: {
      type: DataTypes.ARRAY(DataTypes.STRING), // Using ARRAY type for an array of strings
      defaultValue: [],
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  }, {
    timestamps: true,
    freezeTableName: true,
    modelName: 'Currency',
});

module.exports = Currency;

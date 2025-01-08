// const { DataTypes } = require('sequelize');
// const { sequelize } = require('./../index');

// module.exports=sequelize.define('AirFreight', {
    
//   branchId: {
//     type: DataTypes.STRING,
//   },
//   rateType: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     defaultValue: 'AE',
//     validate: {
//       isIn: [['AE', 'AI', 'DM']],
//     },
//   },
//   product: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   productId: {
//     type: DataTypes.STRING,
//   },
//   autoRevert: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     defaultValue: 'No',
//     validate: {
//       isIn: [['Yes', 'No']],
//     },
//   },
//   sellMin: {
//     type: DataTypes.STRING,
//     defaultValue: '',
//   },
//   breakevenMin: {
//     type: DataTypes.STRING,
//     defaultValue: '',
//   },
//   strikeRateMin: {
//     type: DataTypes.STRING,
//     defaultValue: '',
//   },
//   sellNormal: {
//     type: DataTypes.STRING,
//     defaultValue: '',
//   },
//   breakevenNormal: {
//     type: DataTypes.STRING,
//     defaultValue: '',
//   },
//   strikeRateNormal: {
//     type: DataTypes.STRING,
//     defaultValue: '',
//   },
//   sell45: {
//     type: DataTypes.STRING,
//     defaultValue: '',
//   },
//   breakeven45: {
//     type: DataTypes.STRING,
//     defaultValue: '',
//   },
//   strikeRate45: {
//     type: DataTypes.STRING,
//     defaultValue: '',
//   },
//   sell100: {
//     type: DataTypes.STRING,
//     defaultValue: '',
//   },
//   breakeven100: {
//     type: DataTypes.STRING,
//     defaultValue: '',
//   },
//   strikeRate100: {
//     type: DataTypes.STRING,
//     defaultValue: '',
//   },
//   sell250: {
//     type: DataTypes.STRING,
//     defaultValue: '',
//   },
//   breakeven250: {
//     type: DataTypes.STRING,
//     defaultValue: '',
//   },
//   strikeRate250: {
//     type: DataTypes.STRING,
//     defaultValue: '',
//   },
//   sell300: {
//     type: DataTypes.STRING,
//     defaultValue: '',
//   },
//   breakeven300: {
//     type: DataTypes.STRING,
//     defaultValue: '',
//   },
//   strikeRate300: {
//     type: DataTypes.STRING,
//     defaultValue: '',
//   },
//   sell500: {
//     type: DataTypes.STRING,
//     defaultValue: '',
//   },
//   breakeven500: {
//     type: DataTypes.STRING,
//     defaultValue: '',
//   },
//   strikeRate500: {
//     type: DataTypes.STRING,
//     defaultValue: '',
//   },
//   sell1000: {
//     type: DataTypes.STRING,
//     defaultValue: '',
//   },
//   groupName: {
//     type: DataTypes.STRING,
//   },
//   contractNo: {
//     type: DataTypes.STRING,
//   },
//   breakeven1000: {
//     type: DataTypes.STRING,
//     defaultValue: '',
//   },
//   strikeRate1000: {
//     type: DataTypes.STRING,
//     defaultValue: '',
//   },
//   additionalRemarks: {
//     type: DataTypes.STRING,
//     defaultValue: '',
//   },
//   spotPriority: {
//     type: DataTypes.STRING,
//     defaultValue: 'zzz',
//   },
//   currency: {
//     type: DataTypes.STRING,
//     defaultValue: '',
//   },
//   transitTime: {
//     type: DataTypes.STRING,
//     defaultValue: '',
//   },
//   hoursConversion: {
//     type: DataTypes.INTEGER,
//   },
//   validityStartDate: {
//     type: DataTypes.DATE,
//     allowNull: false,
//   },
//   validityEndDate: {
//     type: DataTypes.DATE,
//     allowNull: false,
//   },
//   isSpotRate: {
//     type: DataTypes.BOOLEAN,
//     defaultValue: false,
//   },
//   forSpotRate: {
//     type: DataTypes.JSONB, // Array data type for multiple spot rates
//   },
//   cargoType: {
//     type: DataTypes.STRING,
//   },
//   tarrifMode: {
//     type: DataTypes.STRING,
//   },
//   vendorId: {
//     type: DataTypes.STRING,
//   },
//   vendorName: {
//     type: DataTypes.STRING,
//   },
//   vendorBranchId: {
//     type: DataTypes.STRING,
//   },
//   vendorBranchName: {
//     type: DataTypes.STRING,
//   },
//   orderBy: {
//     type: DataTypes.STRING,
//   },
//   groupNameRemarks: {
//     type: DataTypes.STRING,
//   },
//   isDeleted: {
//     type: DataTypes.BOOLEAN,
//     defaultValue: false,
//   },
//   deletedBy: {
//     type: DataTypes.UUID, 
//     // Assuming deletedBy refers to an admin
//     // references: {
//     //   model: 'adminMasters', // The referenced model for deletion
//     //   key: 'id',
//     // },
//   },
// }, {
//   timestamps: true,
//   freezeTableName: true,
//   modelName:'AirFreight'
// });



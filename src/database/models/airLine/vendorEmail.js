// const { DataTypes } = require('sequelize');
// const {sequelize}=require('../../../database/index')
// const AirLineBranch = require('./airlineBranches');

// const VenderEmails = sequelize.define(
//   'VenderEmails', 
//   {
//     id: {
//         allowNull: false,
//         // autoIncrement: true,
//         primaryKey: true,
//         type: DataTypes.UUID,
//         defaultValue:DataTypes.UUIDV4
//       },
//     vendorId: {
//       type: DataTypes.STRING,
//     },
//     vendorName: {
//       type: DataTypes.STRING,
//     },
//     branchId: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: 'AirLineBranch', // Reference to the correct model name
//         key: 'id',
//       },
//       onUpdate: 'CASCADE',
//       onDelete: 'CASCADE',
//     },
//     createdAt: {
//       allowNull: false,
//       type: DataTypes.DATE,
//     },
//     updatedAt: {
//       allowNull: false,
//       type: DataTypes.DATE,
//     },
//   },
//   {
//     paranoid: true,
//     freezeTableName: true,
//     modelName: 'VenderEmail', // Ensure consistent model name
//   }
// );

// (async () => {
//   try {
//     await sequelize.sync({ alter: true });
//     console.log('Database synchronized successfully!');
//   } catch (error) {
//     console.error('Error syncing database:', error);
//   }
// })();

// module.exports = VenderEmails;

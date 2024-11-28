// const { DataTypes } = require('sequelize');
// const {sequelize}=require('../../../database/index')

// const ContectPersion = sequelize.define(
//   'ContectPersion',
//   {
//     id: {
//         allowNull: false,
//         // autoIncrement: true,
//         primaryKey: true,
//         type: DataTypes.UUID,
//         defaultValue:DataTypes.UUIDV4
//       },
//     branchContactName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         notNull: { msg: 'Contact name cannot be null' },
//         notEmpty: { msg: 'Contact name cannot be empty' },
//       },
//     },
//     branchContactNumber: {
//       type: DataTypes.STRING,
//     },
//     branchContactEmail: {
//       type: DataTypes.STRING,
//       validate: {
//         isEmail: { msg: 'Invalid email format' },
//       },
//     },
//     branchEmailCC: {
//       type: DataTypes.STRING,
//     },
//     branchId: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: 'AirLineBranch', // Matches the table or model name
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
//     modelName: 'ContectPersion', // Matches the table name
//   }
// );

// // Define associations
// // ContectPersion.associate = (models) => {
// //   ContectPersion.belongsTo(models.AirLineBranch, { foreignKey: 'branchId', as: 'branch' });
// // };

// // Automatic table synchronization
// (async () => {
//   try {
//     await sequelize.sync({ alter: true });
//     console.log('Database synchronized successfully!');
//   } catch (error) {
//     console.error('Error syncing database:', error);
//   }
// })();

// module.exports = ContectPersion;

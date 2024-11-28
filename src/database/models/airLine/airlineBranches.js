// const { DataTypes } = require('sequelize');
// const {sequelize}=require('../../../database/index')
// const AirLine=require('./airLine');
// const ContectPersion = require('./contectPersion');
// const AirLineBranch = sequelize.define(
//   'AirLineBranch',
//   {
//     id: {
//       allowNull: false,
//       // autoIncrement: true,
//       primaryKey: true,
//       type: DataTypes.UUID,
//       defaultValue:DataTypes.UUIDV4
//     },
//     branchEmail: {
//       type: DataTypes.ARRAY(DataTypes.STRING),
//     },
//     branchEmailCC: {
//       type: DataTypes.ARRAY(DataTypes.STRING),
//     },
//     branchAddress: {
//       type: DataTypes.STRING,
//     },
//     airportName: {
//       type: DataTypes.ARRAY(DataTypes.STRING),
//     },
//     groundHandlers: {
//       type: DataTypes.STRING,
//     },
//     branchName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         notNull: { msg: 'Branch name cannot be null' },
//         notEmpty: { msg: 'Branch name cannot be empty' },
//       },
//     },
//     minStock: {
//       type: DataTypes.STRING,
//     },
//     stockType: {
//       type: DataTypes.ENUM('DIRECT', 'GSA', 'CASS'),
//       defaultValue: 'DIRECT',
//     },
//     airlineId: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: 'Airline', // Matches the table name or model name
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
//     deletedAt: {
//       type: DataTypes.DATE,
//     },
//   },
//   {
//     paranoid: true,
//     freezeTableName: true,
//     modelName: 'AirLineBranch',
//   }
// );


// AirLineBranch.hasMany(ContectPersion, {
//   foreignKey: 'clubId',
// });
// ContectPersion.belongsTo(AirLineBranch);

// // AirLineBranch.belongsTo(AirLine, { foreignKey: 'airlineId' });

// (async () => {
//   try {
//     await sequelize.sync({ alter: true });
//     console.log('Database synchronized successfully!');
//   } catch (error) {
//     console.error('Error syncing database:', error);
//   }
// })();

// module.exports = AirLineBranch;

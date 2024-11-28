// const {DataTypes} =require('sequelize');
// const AirLineBranch=require('./airlineBranches')

// const {sequelize}=require('../../../database/index')

// const AirLine=sequelize.define(
//    'Airline',
//   {
//    id: {
//       type: DataTypes.INTEGER,  // Change this to INTEGER
//       autoIncrement: true,
//       primaryKey: true,
//       allowNull: false,
//   },

//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         notNull: { msg: 'Name cannot be null' },
//         notEmpty: { msg: 'Name cannot be empty' },
//       },
//     },
//     logo: {
//       type: DataTypes.STRING,
//     },
//     code: {
//       type: DataTypes.STRING,
//     },
//     prefix: {
//       type: DataTypes.STRING,
//     },
//     fullName: {
//       type: DataTypes.STRING,
//     },
//     groundHandlers: {
//       type: DataTypes.STRING,
//     },
//     useForCourier: {
//       type: DataTypes.BOOLEAN,
//       defaultValue: false,
//     },
//     isDeleted: {
//       type: DataTypes.BOOLEAN,
//       defaultValue: false,
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
//     modelName: 'Airline',
//   }
// );

// // AirLine.hasMany(AirLineBranch,{foreignKey:'airlineId', as :'branches'});
// // AirLineBranch.belongsTo(AirLine,{foreignKey:'airlineId',as:'airline'})

// (async () => {
//    try {
//      await sequelize.sync({ alter: true }); // Use alter to apply necessary changes (like adding new columns, etc.)
//      console.log('Database synchronized successfully!');
//    } catch (error) {
//      console.error('Error syncing database:', error);
//    }
//  })();

//  module.exports =AirLine

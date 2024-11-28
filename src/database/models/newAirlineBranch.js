// const { DataTypes } = require('sequelize');
// const { sequelize } = require('./../index');
// const Airline= require('./newAirlin');
// const ContectPersion = require('./newContectPersion');
// const VenderMail = require('./newVenderMail');
// const AirlineBranch = sequelize.define('AirlineBranch',

//     {
//         id: {
//             type: DataTypes.INTEGER,
//             autoIncrement: true,
//             primaryKey: true,
//         },
//         branchEmail: {
//           type: DataTypes.ARRAY(DataTypes.STRING),
//         },
//         branchEmailCC: {
//           type: DataTypes.ARRAY(DataTypes.STRING),
//         },
//         branchAddress: {
//           type: DataTypes.STRING,
//         },
//         airportName: {
//           type: DataTypes.ARRAY(DataTypes.STRING),
//         },
//         groundHandlers: {
//           type: DataTypes.STRING,
//         },
//         branchName: {
//           type: DataTypes.STRING,
//           allowNull: false,
//           validate: {
//             notNull: { msg: 'Branch name cannot be null' },
//             notEmpty: { msg: 'Branch name cannot be empty' },
//           },
//         },
//         minStock: {
//           type: DataTypes.STRING,
//         },
//         stockType: {
//           type: DataTypes.ENUM('DIRECT', 'GSA', 'CASS'),
//           defaultValue: 'DIRECT',
//         },
//         airlineId: {
//           type: DataTypes.INTEGER,
//           allowNull: false,
//         //   references: {
//         //     model: 'Airline', // Matches the table name or model name
//         //     key: 'id',
//         //   },
//           onUpdate: 'CASCADE',
//           onDelete: 'CASCADE',
//         },
//         createdAt: {
//           allowNull: false,
//           type: DataTypes.DATE,
//         },
//         updatedAt: {
//           allowNull: false,
//           type: DataTypes.DATE,
//         },
//         deletedAt: {
//           type: DataTypes.DATE,
//         },
//       }, {
//     timestamps: true,
//     freezeTableName: true,
//     modelName: 'AirlineBranch'
// });

// AirlineBranch.hasMany(ContectPersion,{ foreignKey: 'branchId', as: 'contactPersons' })
// ContectPersion.belongsTo(AirlineBranch,{ foreignKey: 'branchId' })

// AirlineBranch.hasMany(VenderMail,{ foreignKey: 'branchId', as: 'vendors' })
// VenderMail.belongsTo(AirlineBranch,{ foreignKey: 'branchId' })



// module.exports =AirlineBranch


const { DataTypes } = require('sequelize');
const { sequelize } = require('./../index');
const ContectPersion = require('./newContectPersion');
const VenderMail = require('./newVenderMail');
const Airline = require('./newAirlin');

const AirlineBranch = sequelize.define('AirlineBranch', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    branchEmail: {
        type: DataTypes.ARRAY(DataTypes.STRING),
    },
    branchEmailCC: {
        type: DataTypes.ARRAY(DataTypes.STRING),
    },
    branchAddress: {
        type: DataTypes.STRING,
    },
    airportName: {
        type: DataTypes.ARRAY(DataTypes.STRING),
    },
    groundHandlers: {
        type: DataTypes.STRING,
    },
    branchName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: 'Branch name cannot be null' },
            notEmpty: { msg: 'Branch name cannot be empty' },
        },
        unique: {
            args: true,
            msg: 'Branch name must be unique for this airline.',
        }
    },
    minStock: {
        type: DataTypes.STRING,
    },
    stockType: {
        type: DataTypes.ENUM('DIRECT', 'GSA', 'CASS'),
        defaultValue: 'DIRECT',
    },
    airlineId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'AirLine',
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
    },
    updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
    },
    deletedAt: {
        type: DataTypes.DATE,
    },
}, {
    timestamps: true,
    freezeTableName: true,
    modelName: 'AirlineBranch',
});

AirlineBranch.hasMany(ContectPersion, { foreignKey: 'branchId', as: 'contactPersons' });
ContectPersion.belongsTo(AirlineBranch, { foreignKey: 'branchId' });

AirlineBranch.hasMany(VenderMail, { foreignKey: 'branchId', as: 'vendors' });
VenderMail.belongsTo(AirlineBranch, { foreignKey: 'branchId' });

module.exports = AirlineBranch;


// const { DataTypes } = require('sequelize');
// const { sequelize } = require('./../index');

// const ContectPersion = sequelize.define('ContectPersion',

//     {
//         id: {
//             allowNull: false,
//             // autoIncrement: true,
//             primaryKey: true,
//             type: DataTypes.UUID,
//             defaultValue: DataTypes.UUIDV4
//         },
//         branchContactName: {
//             type: DataTypes.STRING,
//             allowNull: true,
//         },
//         branchContactNumber: {
//             type: DataTypes.STRING,
//         },
//         branchContactEmail: {
//             type: DataTypes.STRING,
//             validate: {
//                 isEmail: { msg: 'Invalid email format' },
//             },
//         },
//         branchEmailCC: {
//             type: DataTypes.STRING,
//         },
//         branchId: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//               references: {
//                 model: 'AirlineBranch', // Matches the table or model name
//                 key: 'id',
//               },
//             onUpdate: 'CASCADE',
//             onDelete: 'CASCADE',
//         },
//         createdAt: {
//             allowNull: false,
//             type: DataTypes.DATE,
//         },
//         updatedAt: {
//             allowNull: false,
//             type: DataTypes.DATE,
//         },
//     }, {
//     timestamps: true,
//     freezeTableName: true,
//     modelName: 'ContectPersion'
// });


// module.exports = ContectPersion

const { DataTypes } = require('sequelize');
const { sequelize } = require('./../index');
const AirlineBranch = require('./newAirlineBranch');

const ContectPersion = sequelize.define('ContectPersion', {
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
    },
    branchContactName: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    branchContactNumber: {
        type: DataTypes.STRING,
    },
    branchContactEmail: {
        type: DataTypes.STRING,
        validate: {
            isEmail: { msg: 'Invalid email format' },
        },
    },
    branchEmailCC: {
        type: DataTypes.STRING,
    },
    branchId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'AirlineBranch',
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
}, {
    timestamps: true,
    freezeTableName: true,
    modelName: 'ContectPersion',
});

module.exports = ContectPersion;

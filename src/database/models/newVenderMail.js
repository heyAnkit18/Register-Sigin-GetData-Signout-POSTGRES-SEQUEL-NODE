// const { DataTypes } = require('sequelize');
// const { sequelize } = require('./../index');

// const VenderMail = sequelize.define('VenderMail',
//     {
//         id: {
//             allowNull: false,          
//             primaryKey: true,
//             type: DataTypes.UUID,
//             defaultValue:DataTypes.UUIDV4
//           },
//         branchContactName: {
//           type: DataTypes.STRING,
//           allowNull: false,
//           validate: {
//             notNull: { msg: 'Contact name cannot be null' },
//             notEmpty: { msg: 'Contact name cannot be empty' },
//           },
//         },
//         branchContactNumber: {
//           type: DataTypes.STRING,
//         },
//         branchContactEmail: {
//           type: DataTypes.STRING,
//           validate: {
//             isEmail: { msg: 'Invalid email format' },
//           },
//         },
//         branchEmailCC: {
//           type: DataTypes.STRING,
//         },
//         branchId: {
//           type: DataTypes.INTEGER,
//           allowNull: false,
//         //   references: {
//         //     model: 'AirLineBranch', // Matches the table or model name
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
//       }, {
//     timestamps: true,
//     freezeTableName: true,
//     modelName: 'VenderMail'
// });


// module.exports=VenderMail

const { DataTypes } = require('sequelize');
const { sequelize } = require('./../index');
const AirlineBranch = require('./newAirlineBranch');
const VenderMail = sequelize.define('VenderMail', {
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
    },
    branchContactName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: 'Contact name cannot be null' },
            notEmpty: { msg: 'Contact name cannot be empty' },
        },
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
    modelName: 'VenderMail',
});

module.exports = VenderMail;

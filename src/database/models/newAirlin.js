

const { DataTypes } = require('sequelize');
const { sequelize } = require('./../index');
const AirlineBranch = require('./newAirlineBranch'); // Make sure to import the AirlineBranch model

const Airline = sequelize.define('AirLine', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: 'Name cannot be null' },
            notEmpty: { msg: 'Name cannot be empty' },
        },
        unique: {
            args: true,
            msg: 'Airline name must be unique.',
        },
    },
    logo: {
        type: DataTypes.STRING,
    },
    code: {
        type: DataTypes.STRING,
    },
    prefix: {
        type: DataTypes.STRING,
    },
    fullName: {
        type: DataTypes.STRING,
    },
    groundHandlers: {
        type: DataTypes.STRING,
    },
    useForCourier: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
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
    modelName: 'AirLine',
});

Airline.hasMany(AirlineBranch, { foreignKey: 'airlineId', as: 'branches' });
AirlineBranch.belongsTo(Airline, { foreignKey: 'airlineId' });

module.exports = Airline;

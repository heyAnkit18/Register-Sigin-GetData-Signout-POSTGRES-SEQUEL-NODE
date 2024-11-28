const {DataTypes}=require('sequelize');
const {sequelize2}=require('./../index');
const Sarthi=require('../models/sarthi')
const TruckMaster=sequelize2.define('TruckMaster',{
    truckName:{
        type:DataTypes.STRING
    },
    truckNumber:{
        type:DataTypes.STRING
    }
    ,
    truckType:{
        type:DataTypes.STRING
    },
    truckCapacityKg:{
        type:DataTypes.STRING
    },
    truckCapacityCbm:{
        type:DataTypes.STRING
    },
    truckWidthCM:{
        type :DataTypes.STRING
    },
    truckHeightCM:{
        type:DataTypes.STRING
    },
    truckHeighCM:{
        type:DataTypes.STRING
    },
    truckRate:{
        type:DataTypes.STRING
    },
    truckKMRange:{
        type:DataTypes.STRING
    }  
},{
    timestamps:true,
    freezeTableName:true,
    modelName:'TruckMaster',
    paranoid:true
})

// TruckMaster.hasMany(Sarthi)


module.exports=TruckMaster


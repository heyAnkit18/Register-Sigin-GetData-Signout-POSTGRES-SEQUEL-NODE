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
    paranoid:true,
    hooks: {
        beforeValidate: (truckMaster, options) => {
         console.log('runing --->>>>>> beforeValidate');
        
        },
        afterValidate:(truckMaster,options)=>{
          console.log('runing --->>>>>> afterValidate')  

        },
        beforeCreate:(truckMaster,options)=>{
          console.log('runing ---->>>beforeCreate ')
        },
        beforeDestroy:(truckMaster,options)=>{
            console.log("Runing----->beforeDestroy")
        },
        beforeUpdate:(truckMaster,options)=>{
            console.log("Runing --->>> beforeUpdate")
        },
        beforeUpsert:(truckMaster,options)=>{
            console.log("runing --->>beforeUpsert")

        },
        afterCreate:(truckMaster,options)=>{
            console.log('runing --->>afterCreate')
        },
        afterDestroy:(truckMaster,options)=>{
           console.log("truning---> afterDestroy")
        },
        afterUpdate:(truckMaster,options)=>{
            console.log("runing --->>>>afterUpdate")
        }
      },

})

// TruckMaster.hasMany(Sarthi)


module.exports=TruckMaster


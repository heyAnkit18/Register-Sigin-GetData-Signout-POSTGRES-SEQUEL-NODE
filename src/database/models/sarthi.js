const {DataTypes}=require('sequelize');
const {sequelize}=require('./../index');
const Sarthi=sequelize.define('Sarthi',{
    dlnumber:{
        type:DataTypes.STRING
    },
    dob:{
        type:DataTypes.STRING
    },
    driverImageUrl:{
        type:DataTypes.STRING
    },
    dldetobj:{
        type:DataTypes.ARRAY(DataTypes.STRING)
    },
    truckNumber: { // Add this field to link to TruckMaster
        type: DataTypes.STRING, // Match TruckMaster's primary key type
        allowNull: true,
    }
},{
    freezeTableName:true,
    modelName:'Sarthi',
    paranoid:true
})

module.exports=Sarthi


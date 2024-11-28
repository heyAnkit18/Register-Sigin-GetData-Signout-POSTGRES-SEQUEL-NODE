const { DataTypes } = require('sequelize');
const {sequelize}=require('./../index')

module.exports=sequelize.define("customer",{
    id:{
        type:DataTypes.UUID,
        allowNull:false,
        defaultValue:DataTypes.UUIDV4,
        primaryKey:true
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    firstName:{
        type:DataTypes.STRING,
        defaultValue:"GUEST"
    },
    lastName:{
        type:DataTypes.STRING,
        defaultValue:"USER"
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    age:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    isDeleted:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    }
    
},{
    freezeTableName:true,
    timestamps:true
})

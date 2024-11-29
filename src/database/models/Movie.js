const {DataTypes, }=require('sequelize')
const {sequelize}=require('./../index')

const Movie= sequelize.define('Movie',{
    id:{
    type:DataTypes.UUID,
    primaryKey:true,
    defaultValue:DataTypes.UUIDV4
    },
    movieName:{
        type:DataTypes.STRING,

    }
},{
    timestamps: true,
    freezeTableName: true,
    modelName: 'Movie',
}
)

module.exports=Movie
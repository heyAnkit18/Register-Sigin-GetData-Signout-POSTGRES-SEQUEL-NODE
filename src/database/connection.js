const {Sequelize }=require('sequelize')
const config=require('../config/index')

const sequelize= new Sequelize (config.db)
// console.log(config.db)

try {
     sequelize.authenticate();
    console.log('Connection has been established successfully DB1.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
}




sequelize.sync({ force: true })


module.exports=sequelize
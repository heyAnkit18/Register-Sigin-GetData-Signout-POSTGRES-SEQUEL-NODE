const {Sequelize }=require('sequelize')
const config=require('../config/index')

const sequelize=new Sequelize(config.db2)

// console.log(config.db2)

try {
     sequelize.authenticate();
    console.log('Connection has been established successfully DB2.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
}


sequelize.sync({alter:true})

// sequelize.sync({ force: true })


module.exports=sequelize 
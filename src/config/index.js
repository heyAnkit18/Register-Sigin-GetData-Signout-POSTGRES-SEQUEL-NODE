const dotEnv = require('dotenv').config()
const applicationMode=process.env.NODE_ENV;

let config={}
console.log(applicationMode)

if(applicationMode==='dev'){

        config.db={
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            dialect: 'postgres',
            seederStorage: 'sequelize',
            logging:false,
            dialectOptions: {
                ssl: {
                    require: true, // Ensures SSL is used
                    rejectUnauthorized: false, // Allows self-signed certificates if needed
                },
            },
        };


        config.db2={
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME2,
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            dialect: 'postgres',
            seederStorage: 'sequelize',
            logging:false,
            dialectOptions: {
                ssl: {
                    require: true, // Ensures SSL is used
                    rejectUnauthorized: false, // Allows self-signed certificates if needed
                },
            },
        
        };
        config.jwtSecret=process.env.JWTSECRET;
        config.port=process.env.port||3000;
        config.bcryptSalt=15

    
}

module.exports=config


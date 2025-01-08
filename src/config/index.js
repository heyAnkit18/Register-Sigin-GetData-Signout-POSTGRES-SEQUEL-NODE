const dotenv = require('dotenv').config(); // Fix the variable name to 'dotenv'
const applicationMode = process.env.NODE_ENV; // Ensure consistency in variable naming

let config = {}; // Initialize an empty config object
console.log('Application Mode:', applicationMode); // Improved logging for clarity

if (applicationMode === 'dev') {
    config.db = {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'postgres',
        seederStorage: 'sequelize',
        logging: false,
        dialectOptions: {
            // ssl: {
            //     require: true, 
            //     rejectUnauthorized: false,
            // },
        },
    };

   

    config.jwtSecret = process.env.JWTSECRET;
    config.port = process.env.PORT || 3000; // Correct environment variable usage
    config.bcryptSalt = 15; // Ensure semicolon for consistency
}

module.exports = config;



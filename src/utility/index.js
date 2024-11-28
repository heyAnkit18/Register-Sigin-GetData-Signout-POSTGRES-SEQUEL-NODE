const errorFormatter = require("./error-formatter");
const jwtAndBcrypt = require("./jwtAndBcrypt");

module.exports={
    ...jwtAndBcrypt,
    ...errorFormatter
}
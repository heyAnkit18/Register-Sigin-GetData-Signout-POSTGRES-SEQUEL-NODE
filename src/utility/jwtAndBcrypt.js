const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const { jwtSecret, bcryptSalt } = require('../config/index')


module.exports = {
    createJwt: async (payload) => {
        try {
            return jwt.sign(payload, jwtSecret, { expiresIn: "24h" })
        } catch (e) {
            console.log(e)
            throw new Error(e && e.message)
        }
    },
    verifyJwt: async (token) => {
        try {
            return jwt.verify(token, jwtSecret);
        } catch (e) {
            console.log(e)
            throw new Error(e && e.message)
        }
    },
    hashPassword: async (password) => {
        try {
            return (await (bcrypt.hash(password, bcryptSalt))).toString()
        } catch (e) {
            console.log(e)
            return new Error(e && e.message)
        }
    },
    matchPassword: async (password, hashedPassword) => {
        try {
            return (await bcrypt.compare(hashedPassword, password))
        } catch (e) {
            console.log(e)
            throw new Error(e && e.message)
        }
    }
}
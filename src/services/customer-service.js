const { customerRepository } = require("../database/repository/index");
const {hashPassword}=require('../utility/index')

module.exports = {
    create: async (req, res, next) => {
        try {
            let {firstName,lastName,email,password,age}=req.body;
            password=await hashPassword(password)
            console.log("yha tk pohoch gya me")
            let newCustomer=await customerRepository.addNewCustomer({
                email:email,
                firstName:firstName,
                lastName:lastName,
                password:password,
                age:age
            })
            return res.status(200).json({
                success:true,
                message:"",
                result:newCustomer
            })
        } catch (e) {
            console.log(e);
            const err= new Error("something went wrong");
            next(err)
        }
    }
}
const { schema } = require("../../validations/index")
const {verifyJwt,formatJoiErrorMessage}=require("../../utility/index")
const joi=require('joi')

module.exports = {
    validatePayload: function (validator)  {
        return async (req, res, next) => {
            try {
                const validated = await schema[validator].validateAsync(req.body);
                req.body = validated;
                next()
            } catch (e) {
                if (e instanceof joi.ValidationError) {
                  
                    return res.status(400).json({
                        success: false,
                        message:formatJoiErrorMessage( e&&e.message||'payload validation failed'),
                        result: ''
                    })
                } else {
                    console.log(e)
                    return res.status(400).json({
                        success: false,
                        message: "Something went wrong",
                        result: ''
                    })
                }
            }
        }

    },
    authenticateUser:async(req,res,next)=>{
        try{
            let token=req.headers['Authorization']?.split(" ")[1]||req.headers.authkey
            let validatedData=await verifyJwt(token)
            req.body.authData=token
        }catch(e){
            return res.status(400).json({
                success:false,
                message:"Authentication failed",
                result:''
            })
        }
    }
}
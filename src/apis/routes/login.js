
const router=require('express').Router();
const{register,signIn,logout}= require("../../service/index")
router.post("/register",register)
router.post("/login",signIn) 
router.delete("/logout",logout)


module.exports=router
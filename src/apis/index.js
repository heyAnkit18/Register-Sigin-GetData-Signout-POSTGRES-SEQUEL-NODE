const router=require('express').Router()

const {login}=require("./routes/index")

router.use("/user",login);
// router.use("/airline",airline);


module.exports=router
const router=require('express').Router()
const {customer,airline}=require("./routes/index")

router.use("/customer",customer);
router.use("/airline",airline);

module.exports=router
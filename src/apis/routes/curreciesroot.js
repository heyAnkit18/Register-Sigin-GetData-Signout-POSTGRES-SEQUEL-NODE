
const router=require('express').Router();
const {Airlineservice}=require('../../services/index')
router.post("/createAirline",Airlineservice.create)
router.get("/getAirline",Airlineservice.getAllAirline)
module.exports=router
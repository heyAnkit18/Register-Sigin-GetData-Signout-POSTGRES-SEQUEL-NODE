
const router=require('express').Router();
const {AirFreightService}=require('../../services/index')
router.post("/createFreight",AirFreightService.create)
module.exports=router
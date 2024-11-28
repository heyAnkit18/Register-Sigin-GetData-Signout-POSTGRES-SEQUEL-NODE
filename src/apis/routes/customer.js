const router=require('express').Router();
const {validatePayload}=require('../middleware/index');
const {customerService,AirFreightService}=require('../../services/index')
router.post("/create",customerService.create)
module.exports=router
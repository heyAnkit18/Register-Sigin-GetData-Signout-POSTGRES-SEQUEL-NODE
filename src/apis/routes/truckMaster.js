
const router=require('express').Router();
const {Truckservice}=require('../../services/index')
router.post("/createTruck",Truckservice.create)
router.get("/get/:truckNumber", Truckservice.getTruckDetailsWithSarthi);
router.post("/addSarhti", Truckservice.addOnlySarthi);



module.exports=router
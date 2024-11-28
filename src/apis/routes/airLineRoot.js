
const router=require('express').Router();
const {Airlineservice}=require('../../services/index')
router.post("/createAirline",Airlineservice.create)
router.get("/getAirline",Airlineservice.getAllAirline)
router.post('/addBranch',Airlineservice.addAirLineBranch)
router.post('/addVender',Airlineservice.addVendorOfAirlineBranch)
router.post('/getByName',Airlineservice.findOneByname)
module.exports=router
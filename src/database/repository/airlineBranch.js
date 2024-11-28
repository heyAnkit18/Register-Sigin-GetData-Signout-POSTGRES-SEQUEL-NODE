const {AirlineBranch}=require('../models/index');
module.exports={
    addNewFreight:async(data)=>{
        try {
            let newAirlineBranch=await AirlineBranch.create(data);
            return newAirlineBranch
        } catch (error) {
            
        }
    }
}
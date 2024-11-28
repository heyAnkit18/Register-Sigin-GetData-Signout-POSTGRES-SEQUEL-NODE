const {AirLine}=require('../models/index');


module.exports={
    addNewFreight:async(data)=>{
        try {
            let newAirLine=await AirLine.create(data);
            return newAirLine
        } catch (error) {
            
        }
    }
}
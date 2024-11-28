const {ContectPerson}=require('../models/index');


module.exports={
    addNewFreight:async(data)=>{
        try {
            let newAirLine=await ContectPerson.create(data);
            return newAirLine
        } catch (error) {
            
        }
    }
}
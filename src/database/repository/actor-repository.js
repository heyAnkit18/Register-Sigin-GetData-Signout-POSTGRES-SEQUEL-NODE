const {AirLine, Actor}=require('../models/index');


module.exports={
    actor:async(data)=>{
        try {
            let newActor=await Actor.create(data);
            return newActor
        } catch (error) {
            
        }
    }
}
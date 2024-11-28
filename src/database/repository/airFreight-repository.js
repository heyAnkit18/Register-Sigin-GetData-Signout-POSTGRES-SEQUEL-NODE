const {AirFreight}=require('../models/index');
// this file is to write all the database logic related to customer there wll be no other code here just pure database logic
module.exports={
    addNewFreight:async(data)=>{
        try{
            console.log(data)
            let newAirFreight=await AirFreight.create(data);
            return newAirFreight;
        }catch(e){
            // logger info logger will also be added to get if any error happends
            console.log(e)
            throw new Error('Unable to create new user at the moment')
        }
    }
}


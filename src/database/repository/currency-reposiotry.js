

const {Currency}=require('../models/index');


module.exports={
    addNewFreight:async(data)=>{
        try {
            let newCurrency=await Currency.create(data);
            return newCurrency
        } catch (error) {
            
        }
    }
}
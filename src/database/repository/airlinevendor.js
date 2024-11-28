const {VenderMail}=require('../models/index');


module.exports={
    addNewFreight:async(data)=>{
        try {
            let newVenderMail=await VenderMail.create(data);
            return newVenderMail
        } catch (error) {
            
        }
    }
}
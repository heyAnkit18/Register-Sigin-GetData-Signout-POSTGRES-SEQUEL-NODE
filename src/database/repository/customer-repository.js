const {customer}=require('../models/index');
// this file is to write all the database logic related to customer there wll be no other code here just pure database logic
module.exports={
    addNewCustomer:async(data)=>{
        try{
            console.log(data)
            let newCustomer=await customer.create(data);
            return newCustomer;
        }catch(e){
            // logger info logger will also be added to get if any error happends
            console.log(e)
            throw new Error('Unable to create new user at the moment')
        }
    }
}
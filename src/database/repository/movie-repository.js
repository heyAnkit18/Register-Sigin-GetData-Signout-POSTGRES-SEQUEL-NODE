const {AirLine, Actor, Movie}=require('../models/index');


module.exports={
    movie:async(data)=>{
        try {
            let newMovie=await Movie.create(data);
            return newMovie
        } catch (error) {
            
        }
    }
}
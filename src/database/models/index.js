// this file will be used to export all the models in our repository
const Airline= require('./newAirlin');
const AirlineBranch=require('./newAirlineBranch');
const ContectPersion=require('./newContectPersion');
const VenderMail=require('./newVenderMail')
const Currency=require('./currency')
const TruckMaster=require('./truckMasters')
const Sarthi=require('./sarthi')
const Movie =require('./Movie')
const Actor=require('./Actor')
module.exports={
    customer:require('./customer'),
    AirFreight:require('./airFreights'),
    Airline,
    AirlineBranch,
    ContectPersion,
    VenderMail,
    Currency,
    TruckMaster,
    Sarthi,
    Movie,
    Actor

}
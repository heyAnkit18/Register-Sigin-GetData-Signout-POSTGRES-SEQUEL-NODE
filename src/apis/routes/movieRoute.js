const router=require('express').Router();
const {Movieservice}=require('../../services/index');
router.post('/addMovie',Movieservice.create)
router.get('/getMove/:id',Movieservice.getActoreByMovieId)
router.get('/addDetails',Movieservice.getallMovieDetailsBy)

module.exports=router
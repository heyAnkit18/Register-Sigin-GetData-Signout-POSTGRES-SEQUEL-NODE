const router=require('express').Router();
const {Movieservice}=require('../../services/index');
router.post('/addMovie',Movieservice.create)
router.get('/getMove/:id',Movieservice.getActoreByMovieId)
router.get('/addDetails',Movieservice.getallMovieDetailsBy)
router.post('/addActorOfMovie/:id',Movieservice.addActorOfAmovie)
router.put('/updateActor/:movieId/:actorId', Movieservice.updateActorMovieActor);
router.post('/addMovieToanActor/:ActorId',Movieservice.addMovieToanActor)
router.get('/getActorById/:id',Movieservice.getActorById)

module.exports=router
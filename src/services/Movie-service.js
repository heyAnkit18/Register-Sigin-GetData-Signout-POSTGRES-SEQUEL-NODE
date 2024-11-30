const { Movie, Actor } = require("../database/models");

module.exports = {

    create: async (req, res, next) => {
        try {
            const { movieName, actors } = req.body; // Actors could be a string or array
            const newMovie = await Movie.create({ movieName });

            if (!movieName) {
                return res.status(404).json({
                    success: false,
                    message: 'Movie name is required',
                });
            }

            // Handle actors as strings
            if (typeof actors === 'string') {
                const newActor = await Actor.create({ ActorName: actors }); // Create the actor
                await newMovie.addActor(newActor); // Associate the new actor with the movie
            } else if (Array.isArray(actors) && actors.length > 0) {
                // Handle actors as an array of IDs
                const actorInstances = await Actor.findAll({
                    where: {
                        id: actors,
                    },
                });

                if (actorInstances.length > 0) {
                    await newMovie.setActors(actorInstances);
                }
            }

            res.status(200).json({
                success: true,
                message: 'Data created successfully',
                result: newMovie
            });
        } catch (error) {
            next(error);
        }
    },

    getActoreByMovieId: async (req, res, next) => {
        const { id } = req.params;
        const movieData = await Movie.findByPk(id)
        // console.log(await movieData.getActors())
        // console.log(await movieData.hasActors(id))
        console.log(await movieData.hasActor(id))






    },

    getallMovieDetailsBy:
        async (req, res, next) => {
            try {
                const getAllData = await Movie.findAll({
                    include: {
                        model: Actor,
                        as: 'Actors' // This is incorrect, it should be 'Actors'
                    }
                });
                if (getAllData.length === 0) {
                    return res.status(404).json({
                        message: "Data Not Found"
                    });
                } else {
                    return res.status(200).json({
                        message: 'Find Successfully',
                        data: getAllData
                    });
                }
            } catch (error) {
                console.error("Error fetching data:", error); // Log the error for debugging
                return res.status(500).json({
                    message: "Internal Server Error",
                    error: error.message // Optional: Send error message to client for debugging purposes (avoid in production)
                });
            }
        },
    addActorOfAmovie:
        async (req, res, next) => {
            try {
                const movieId = req.params.id; // Get movie ID from params
                const { actorName } = req.body; // Get actorName from request body

                // Step 1: Find the movie by ID
                const existingMovie = await Movie.findOne({ where: { id: movieId } });
                if (!existingMovie) {
                    return res.status(404).json({
                        message: 'Movie not found',
                        success: false,
                    });
                }

                // Step 2: Find or create the actor
                let actor = await Actor.findOne({ where: { ActorName: actorName } });
                if (!actor) {
                    actor = await Actor.create({ ActorName: actorName });
                }
                // Step 3: Add the actor to the movie
                await existingMovie.addActor(actor);
                // Step 4: Fetch the updated list of actors for the movie
                const actors = await existingMovie.getActors();
                res.status(200).json({
                    message: `Actor "${actorName}" added successfully to the movie "${existingMovie.movieName}"`,
                    success: true,
                    actors, // Return the updated list of actors
                });
            } catch (error) {
                next(error); // Pass the error to the error handler middleware
            }

        },

    updateActorMovieActor:
        async (req, res, next) => {
            try {
                const { movieId, actorId } = req.params;
                const { actorDetail } = req.body;

                if (!actorDetail) {
                    return res.status(400).json({ message: "Actor details are required." });
                }

                // Check if the actor and movie association exists
                const movie = await Movie.findByPk(movieId, {
                    include: [
                        {
                            model: Actor,
                            as: 'Actors', // Alias is mandatory here
                        },
                    ],
                });

                if (!movie) {
                    return res.status(404).json({ message: "Actor-Movie association not found." });
                }

                // Update actor details
                const [updated] = await Actor.update(actorDetail, {
                    where: { id: actorId },
                });
                if (!updated) {
                    return res.status(404).json({ message: "Actor not found or no changes made." });
                }
                return res.status(200).json({
                    message: "Actor details updated successfully.",
                });
            } catch (error) {
                next(error);
            }
        },

    addMovieToanActor:
    async (req, res, next) => {
        try {
            const { ActorId } = req.params; // ActorId from params
            const { movieNames } = req.body; // Accept an array of movie names in the request body
    
            // Validate the input
            if (!movieNames || !Array.isArray(movieNames) || movieNames.length === 0) {
                return res.status(400).json({
                    success: false,
                    message: 'Movie names must be provided as an array.',
                });
            }
    
            // Find the actor
            const actor = await Actor.findOne({ where: { id: ActorId } });
            if (!actor) {
                return res.status(404).json({
                    success: false,
                    message: 'Actor not found.',
                });
            }
    
            // Find or create the movies
            const movies = await Promise.all(
                movieNames.map(async (movieName) => {
                    // Check if movie already exists
                    let movie = await Movie.findOne({ where: { movieName } });
                    if (!movie) {
                        // If the movie doesn't exist, create it
                        movie = await Movie.create({ movieName });
                    }
                    return movie;
                })
            );
    
            // Associate the found or created movies with the actor
            await actor.addMovies(movies); // Sequelize's `addMovies` method
    
            return res.status(200).json({
                success: true,
                message: 'Movies successfully added to the actor.',
            });
        } catch (error) {
            console.error('Error adding movies to actor:', error);
            next(error);
        }
    },
     
    getActorById:
    async(req,res,next)=>{
        
    }






}
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
                result: {
                    ...newMovie,
                    ...newActor
                },
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
        }


}
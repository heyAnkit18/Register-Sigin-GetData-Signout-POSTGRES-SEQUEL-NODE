const { DataTypes } = require('sequelize');
const { sequelize } = require('./../index');
const Movie = require('./Movie');

// Define the Actor model
const Actor = sequelize.define("Actor", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  ActorName: {
    type: DataTypes.STRING,
  },
}, {
  freezeTableName: true,
  modelName: 'Actor',
  timestamps: true,
});

// Define the many-to-many relationship between Actor and Movie
Actor.belongsToMany(Movie, { through: 'ActorMovie' });
Movie.belongsToMany(Actor, { through: 'ActorMovie', as: 'Actors' });

module.exports = Actor;

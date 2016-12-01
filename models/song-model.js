const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');
const Genre = require("./genre-model.js")

//////////
// YOUR CODE HERE:
//////////
var Song = sequelizeConnection.define("Song", {
	title: { type: Sequelize.STRING(250) },
	youtube_url: {
		type: Sequelize.STRING,
		validate: {
			isUrl: true
		}
	}
})

Song.belongsToMany(Genre, {through: "Genre_Song"})
Genre.belongsToMany(Song, {through: "Genre_Song" })

module.exports = Song;

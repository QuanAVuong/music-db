const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');
const Genre = require("./genre-model.js")
const Artist = require("./artist-model.js")
//////////
// YOUR CODE HERE:
//////////
var Song = sequelizeConnection.define("song", {
	title: { type: Sequelize.STRING(250) },
	youtube_url: {
		type: Sequelize.STRING,
		validate: {
			len: [5, 100],
			isUrl: true
		}
	}
})

Song.belongsTo(Artist) // add ArtistId to Song table

// safer to put both below statements in 1 model rather than separating to avoid circular importing of each other (will get error)
// this will only create ID columns, not the actual IDs
// the new tables created also automatically get new methods based on Model's name eg. addGenres, addSongs etc.

Song.belongsToMany(Genre, {through: "Genre_Song"})
Genre.belongsToMany(Song, {through: "Genre_Song" })


// With Belongs-To-Many you can query based on through relation and select specific attributes. For example using findAll with through

// User.findAll({
//   include: [{
//     model: Project,
//     through: {
//       attributes: ['createdAt', 'startedAt', 'finishedAt'],
//       where: {completed: true}
//     }
//   }]
// });

module.exports = Song;

const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');

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

module.exports = Song;

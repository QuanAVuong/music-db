const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');

//////////
// YOUR CODE HERE:
//////////
var Playlist = sequelizeConnection.define("Playlist", {
	title: {
		type: Sequelize.STRING(100),
		validate: {
			isEmpty: true
		}
	}
})

module.exports = Playlist;

const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');

//////////
// YOUR CODE HERE:
//////////
var Artist = sequelizeConnection.define("Artist", {
	name: {
		type: Sequelize.STRING(100),
		validate: {
			notEmpty: true
		}
	}
})


module.exports = Artist;

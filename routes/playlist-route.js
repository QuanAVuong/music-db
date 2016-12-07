const Playlist = require('../models/playlist-model');
const express = require('express');
const router = express.Router();

// /api/playlists GET all playlists 
const getAllPlaylists = (req,res) => {
  Playlist.findAll()
  .then( playlists => res.send(playlists) )
};

// /api/playlists GET all playlists with song information fully populated (in other words, should say full song, artist, and genre names, instead of only having the ids)
const getPlaylistsFull = (req, res) => {
	Playlist.findAll(
		{ include: [ {all: true} ] }
	)
	.then( fullPlaylists => res.send(fullPlaylists) )
}


// /api/playlists/:id GET a specific playlist by id

// /api/playlists POST (create) a new playlist

// You will also have to use a special 'accessor' method here to add in the songs

// /api/playlists/:id DELETE a playlist by id



// API ENDPOINTS
router.route("/")
.get(getAllPlaylists)

router.route("/full")
.get(getPlaylistsFull)

// router.route("/:id")
// .get(getPlaylistById)


module.exports = router

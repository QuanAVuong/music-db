const Song = require('../models/song-model');
const express = require('express');
const router = express.Router();

const getAllSongs = (req,res)=>{
  Song.findAll()
  .then((songs)=>{
    res.send(songs)
  })
};

const getAllSongsInfo = (req, res) => {
	Song.findAll({
		include: [{ all: true }]
	})
	.then( allSongs => res.send(allSongs) )
}

const getSongById = (req, res) => {
	Song.findById(// WRONG: {where: {id: req.params.id} }
		req.params.id
	).then( song => res.send(song) )
}

const postSong = (req, res) => {
	Song.findOrCreate(
		{where: {title: req.body.title} }
	).
	then( song => res.send("created new song: " + req.body.song) )
}

const putSongByTitle = (req, res) => {
	Song.update(
		{title: req.params.newTitle}, // set attributes' value
		{id: req.params.id} // where criteria
	)
	.then( "Song ID: " + req.params.id + " title's replaced with " + req.params.newTitle )
}


router.route('/')
.get(getAllSongs)
.post(postSong)

router.route("/full")
.get(getAllSongsInfo)

router.route("/:id")
.get(getSongById)

router.route("/:id/:newTitle")
.put(putSongByTitle)

module.exports = router

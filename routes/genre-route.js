const Genre = require('../models/genre-model');
const express = require('express');
const router = express.Router();


const getAllGenres = (req,res)=>{
  Genre.findAll().
  then( data => res.send(data) )
};

// /api/genre/sortedAZ GET all genres, ordered a-z
const getGenresAZ = (req, res) => {
	Genre.findAll(
		{ order: [ "title" ] } // there's no ", 'ASC' "
	).then( sortedGenres => res.send(sortedGenres) )
}

// /api/genre/:id GET a specific genre by id

// /api/genre POST (create) a new genre

// /api/genre/:id/:newGenre PUT (update) a specific genre's name


router.route('/')
.get(getAllGenres)

router.route("/sortedAZ")
.get(getGenresAZ)

module.exports = router

const Artist =require('../models/artist-model');
const express = require('express');
const router = express.Router();

// DEFAULT PATH
const getAllArtists = (req,res)=>{
  Artist.findAll()
  .then((data)=>{
    res.send(data)
  })
};

// API METHODS (MIDDLEWARE ?)
const postArtist = (req, res) => {
	Artist.findOrCreate({
		where: {name: req.body.name}
	})
	.then( artist => res.send("created a new artist: " + req.body.name) )
}

const getArtistById = (req, res) => {
	Artist.findById(req.params.id)
	.then( artist => res.send(artist) )
}

const deleteArtistById = (req, res) => {
	// res.send("artist:\n " + req.params.id + " " + req.body.name) // => Unhandled rejection Error: Can't set headers after they are sent.
	Artist.destroy({
		where: {
			id: req.params.id
		}
	}) // won't show since it's already deleted
	.then( () => res.send("deleted artist:\n " +"id: " + req.params.id + " name: " + req.body.name) )
}

const putArtistName = (req, res) => {
	Artist.findById( req.params.id
		// {
		// 	where: {name: req.params.id}
		// }
	)
	.then(	artist => artist.update( 
		{name: req.params.newName} )
	)
	.then( artist => res.send( "artist ID: " + req.params.id + "\nprevious name: " + req.body.name + "\n" + "new name: " + req.params.newName) )
}

// OR:
/*const editNewArtist = (req,res)=>{
  Artist.update(
  { name: req.params.name },
  { where: { id: req.params.id }
  }).then((data)=>{
    res.send('Artist '+req.params.name +' ('+req.params.id+')'+' has been updated!')
  })
};*/

// PATHS & HTTP VERBS
router.route('/')
.get(getAllArtists)
.post(postArtist)

router.route("/:id")
.get(getArtistById)
.delete(deleteArtistById)

router.route("/:id/:newName")
.put(putArtistName)

module.exports = router

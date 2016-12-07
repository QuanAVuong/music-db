const Genre = require('../models/genre-model');
const express = require('express');
const router = express.Router();

const getGenres = (req,res)=>{
  Genre.findAll().
  then((data)=>{
    res.send(data)
  })
};



// /api/genres GET all genres, ordered a-z

// /api/genres/:id GET a specific genre by id

// /api/genres POST (create) a new genre

// /api/genres/:id/:newGenre PUT (update) a specific genre's name


router.route('/')
.get(getGenres)

module.exports = router

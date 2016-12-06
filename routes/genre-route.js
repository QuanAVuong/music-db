const Genre = require('../models/genre-model');
const express = require('express');
const router = express.Router();

const getGenres = (req,res)=>{
  Genre.findAll().
  then((data)=>{
    res.send(data)
  })
};

router.route('/')
.get(getGenres)

module.exports = router

const Playlist = require('../models/playlist-model');
const express = require('express');
const router = express.Router();

var loadPlaylist = (req,res)=>{
  Playlist.findAll()
  .then((playlists)=>{
    res.send(playlists)
  })
};

router.route('/')
.get(loadPlaylist)

module.exports = router

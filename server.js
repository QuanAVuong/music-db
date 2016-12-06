const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const sequelizeConnection = require('./db');

//body-parser middleware adds .body property to req (if we make a POST AJAX request with some data attached, that data will be accessible as req.body)
app.use(bodyParser.urlencoded({ extended: true }));


// ROUTES
const router = require('./routes'); // looks for index.js only

const artistRouter = router.artistRouter;
const genreRouter = router.genreRouter;
const songRouter = router.songRouter;
const playlistRouter = router.playlistRouter;

app.use('/api/artist', artistRouter);
app.use('/api/genre', genreRouter);
app.use('/api/song', songRouter);
app.use('/api/playlist', playlistRouter);
app.use('*', (req, res) => {
	res.send("404 path not found")
})

//listen on port 8888
app.listen('9999', () => console.log('Listening on port 9999'));



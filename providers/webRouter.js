const express = require('express');
const path = require('path');

const router = express.Router();

const clientPath = path.join(__dirname, '../client/build'); //Creates a path object to the client build folder
router.use(express.static(clientPath)); //Serves files to client/build (makes it visible to public)
console.log(clientPath);

const clientFile = path.join(clientPath, 'index.html'); //Route the domain route to react's index.html (which is reacts entry point)
router.get('/', (req, res) => res.sendFile(clientFile));

module.exports = router;

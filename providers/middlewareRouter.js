const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

router.use(bodyParser.json()); //middleware for parsing post parameters

module.exports = router;

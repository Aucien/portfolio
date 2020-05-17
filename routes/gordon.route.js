const express = require('express');
const gordoncontroller = require('../controllers/gordon.controller');

const router = express.Router();

router.get('/gordon', gordoncontroller.get);
router.post('/gordon', gordoncontroller.post);

router.post('/user/:id');

module.exports = router;

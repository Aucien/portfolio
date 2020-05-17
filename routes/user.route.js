const express = require('express');
const usercontroller = require('../controllers/user.controller');

const router = express.Router();

router.get('/user', usercontroller.getAll);
router.post('/user', usercontroller.getAll);

router.get('/user/id/:id', usercontroller.getUserById);
router.post('/user/id/:id', usercontroller.getUserById);

router.get('/user/name/:name', usercontroller.getUserByName);
router.post('/user/name/:name', usercontroller.getUserByName);

module.exports = router;

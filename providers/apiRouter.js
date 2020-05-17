const express = require('express');
const gordonRoute = require('../routes/gordon.route');
const userRoute = require('../routes/user.route');

const router = express.Router();

router.use(gordonRoute);
router.use(userRoute);

module.exports = router;

const express = require('express');

const router = express.Router();

const apiRoutes = require('./subtraction');

router.use('/', apiRoutes);

module.exports = router;

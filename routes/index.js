const express = require('express');

const router = express.Router();

const apiRoutes = require('./subtraction');

router.use('/operations', apiRoutes);

module.exports = router;

const express = require('express');

const router = express.Router();

const apiRoutes = require('./subtraction');

router.get('/', (req, res) => {
  console.log('health check');
  return res.status(httpStatusCodeConfig['oK']).send({
    message: 'ok'
  });
});

router.use('/operations', apiRoutes);

module.exports = router;

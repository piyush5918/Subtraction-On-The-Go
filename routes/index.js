const express = require('express');

const router = express.Router();

const apiRoutes = require('./subtraction');

router.use('/', (req, res) => {
  console.log('health check');
  return res.status(200).send({
    message: 'ok'
  });
});
router.use('/operations', apiRoutes);

module.exports = router;

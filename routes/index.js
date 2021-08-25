const express = require('express');

const router = express.Router();

const apiRoutes = require('./subtraction');

router.use('/health', (req, res) => {
  console.log('health check');
  return res.status(200).send({
    message: 'ok'
  });
});
router.use('/', apiRoutes);

module.exports = router;

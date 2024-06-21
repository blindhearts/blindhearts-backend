var express = require('express');
var router = express.Router();

/* GET Server. */
router.get('/:type', function (req, res, next) {
  const body = req.body;
  const params = req.params;

  if (params.type) {
    console.log(params.type);
    res.send({ id: 'serverId' });
  } else {
    res.send('failed');
  }
});

module.exports = router;

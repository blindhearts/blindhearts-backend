var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id?', function (req, res, next) {
  const body = req.body;
  const params = req.params;

  if (body.email && body.password) {
    console.log(body.email, body.password);
    res.send({ id: 'userId' });
  } else {
    res.send('User id');
  }
});

router.post('/:id?', function (req, res, next) {
  const body = req.body;
  const params = req.params;

  console.log(body.email, body.password, body.dob, body.gender);
  res.send({ id: 'userId' });
});

module.exports = router;

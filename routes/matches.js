var express = require('express');
var router = express.Router();

/* GET Match Messages */
router.get('/:id/messages', function (req, res, next) {
  const body = req.body;
  const params = req.params;

  res.send({
    messages: [
      {
        userId: params.id,
        time: 100,
        content: 'hello there',
      },
    ],
  });
});

/* GET Match. */
router.get('/:id', function (req, res, next) {
  const body = req.body;
  const params = req.params;

  if (params.id) {
    console.log(params.id);
    res.send('succesful');
  } else {
    res.send('failed');
  }
});

/* POST Match. */
router.post('/', function (req, res, next) {
  const body = req.body;
  const params = req.params;

  if (body.userId1 && body.userId2) {
    console.log(body.userId1, body.userId2);
    res.send('succesful');
  } else {
    res.send('failed');
  }
});

/* POST Message. */
router.post('/:id/messages', function (req, res, next) {
  const body = req.body;
  const params = req.params;

  res.send([
    {
      userId: params.id,
      time: 100,
      content: 'hello there',
      matchId: 'matchId',
    },
  ]);
});

module.exports = router;

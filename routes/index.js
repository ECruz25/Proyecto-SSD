const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World');
});
router.get('/users', (req, res) =>
  res.json({
    edwin: 'edwin',
  })
);

module.exports = router;

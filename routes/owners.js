var express = require('express');
var router = express.Router();
const Owner = require('../models').owner;

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', async function (req, res) {
  try {
    const newOwner = await Owner.create(req.body);
    res.status(201).send(newOwner);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;

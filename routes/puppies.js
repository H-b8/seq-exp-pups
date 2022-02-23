var express = require('express');
const puppy = require('../models/puppy');
var router = express.Router();
const Puppy = require('../models').puppy;

/* GET puppies listing. */
router.get('/', async function (req, res) {
  try {
    const puppies = await Puppy.findAll();
    res.status(200).send(puppies);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post('/', async function (req, res) {
  try {
    const newPuppy = await Puppy.create(req.body);
    res.status(201).send(newPuppy);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get('/:id', async function (req, res) {
  try {
    const puppy = await Puppy.findAll({
      where: {
        id: req.params.id
      }
    });
    res.status(200).send(puppy);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.put('/:id', async function (req, res) {
  const query = {
    where: {
      id: req.params.id
    }
  };

  try {
    await Puppy.update(req.body, query);
    const editedPuppy = await Puppy.findAll(query)
    res.status(200).send(editedPuppy);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.delete('/:id', async function (req, res) {
  try {
    await Puppy.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).send('PUPPY DELETED');
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;

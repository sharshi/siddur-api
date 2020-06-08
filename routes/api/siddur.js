const express = require("express");
const router = express.Router();
const passport = require('passport');

const Siddur = require('../../models/Siddur');

router.get('/', (req, res) => {
  Siddur.find()
    .sort({ date: -1 })
    .then(paragraphs => res.json(paragraphs))
    .catch(err => res.status(404).json({
      siddurnotfound: 'No tweets found'
    }));
});

router.get('/nextempty', (req, res) => {
  Siddur.findOne({ 'name': ""})
    .then(paragraphs => res.json(paragraphs))
    .catch(err => res.status(404).json({
      paragraphnotfound: 'No empty paragraphs found'
    }));
});

router.get('/:paragraph', (req, res) => {
  Siddur.findOne({ 'name': req.params.paragraph })
    .then(paragraph => {
      if (paragraph) {
        res.json(paragraph)
      } else {
        res.status(404).json({
          paragraphnotfound: 'No paragraph found'
        })
      }
    })
    .catch(err => res.status(404).json({
      paragraphnotfound: 'No paragraph found'
    }));
});


router.post('/',
  // passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { _id, text, tags, name } = req.body;
    const updates = {};
    if (name) updates.name = name;
    if (tags) updates.tags = tags;
    if (text) updates.text = text;

    Siddur.findByIdAndUpdate({ _id }, updates, { new: true })
      .then(paragraphs => res.json(paragraphs))
      .catch(err => res.status(404).json({
        paragraphnotfound: err
      }));
  }
)


module.exports = router;
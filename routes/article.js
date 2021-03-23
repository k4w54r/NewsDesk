const express = require('express');
const router = express.Router();

const Article = require('../models/Article');

router.get('/getArticles/', async (req, res) => {
  try {
    let articles = await Article.find({}, { _id: 0 });
    res.json(articles);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(404).json({ msg: 'Articles not found' });
    }
    res.status(500).send('Server Error');
  }
});

module.exports = router;

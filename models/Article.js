const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  title: {
    type: String,
  },
  url: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  newsSite: {
    type: String,
  },
  summary: {
    type: String,
  },
});

Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;

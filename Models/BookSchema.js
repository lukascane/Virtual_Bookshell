const { Schema, model } = require('mongoose');

const BookCollectionSchema = new Schema({
  key: String,
  title: { type: String, required: true },
  author: { type: String, required: true },
  year: Number,
  subject: String,
  publisher: String,
  review: String,
  rating: Number,
  pages: Number,
  isbn: String,
  cover_i: Number,
  reading_status: Number,
  user: { type: Schema.Types.ObjectId, ref: 'user' },
  language: Array,
});

const Book = model('book', BookCollectionSchema);
module.exports = Book;

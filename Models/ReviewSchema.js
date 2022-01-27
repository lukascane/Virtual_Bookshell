const { Schema, model } = require('mongoose');

const ReviewSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'user' },
  createdOn: { type: Date, default: Date.now() },
  review: String,
  book_cover_isbn: String,
  book_key_id_API: String,
  international_id: String,
});

const Review = model('review', ReviewSchema);
module.exports = Review;

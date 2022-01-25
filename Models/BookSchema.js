
const {Schema, model} = require("mongoose");

const BookCollectionSchema = new Schema({
    key_isbn: Number,
    cover: String,
    title: {type:String, required:true},
    author:{type:String, required:true},
    year: Number,
    subject: String,
    publisher: String,
    review: String,
    rating: Number,
    reading_status: Number,
    pages: Number,
    user_id: {type:Schema.Types.ObjectId, ref:"user"},
    language: String,
    read_status: Number,
})

const Book = model('book', BookCollectionSchema);
module.exports = Book
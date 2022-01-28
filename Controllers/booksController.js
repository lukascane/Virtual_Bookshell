const Books = require('./../Models/BookSchema');

exports.createBooksCollection = async (req, res) => {
  try {
    const book = new Books();
    book.key_isbn = req.body.key_isbn;
    book.cover = req.body.cover;
    book.title = req.body.title;
    book.author = req.body.author;
    book.subject = req.body.subject;
    book.publisher = req.body.publisher;
    book.review = req.body.review;
    book.rating = req.body.rating;
    book.reading_status = req.body.reading_status;
    book.pages = req.body.pages;
    book.user_id = req.body.user_id;
    book.language = req.body.language;

    await book.save();

    return res.status(200).json({ message: 'Books collection created' });
  } catch (error) {
    return res.status(400).json({
      message: 'Something went wrong creating the book collection',
      error,
    });
  }
};

exports.listBooks = async (req, res) => {
  try {
    const books = await Books.find();
    return res.status(200).json({ message: 'list of books', books });
  } catch (error) {
    return res.status(400).json({ message: 'Error happened' });
  }
};

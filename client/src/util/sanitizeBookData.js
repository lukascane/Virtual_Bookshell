export function discardEmptyISBN(books) {
  return books.map((book) => book.isbn.length);
}

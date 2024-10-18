const mongoose = require('mongoose');
const Book = require('./Database/model')

// Your function to push data
async function pushdata() {
  const data = {
    bookID: 101, 
    bookName: 'The Adventures of Sherlock Holmes',
    authorName: 'Arthur Conan Doyle',
    yearOfPublication: 1892,
    price: 15.99,
    discount: 0,
    pages: 307,
    condition: 'new',
    description: 'A collection of twelve short stories featuring Sherlock Holmes.'
  };

  try {
    // Check if bookID or bookName already exists
    const existingBook = await Book.findOne({
      $or: [
        { bookID: data.bookID },   
        { bookName: data.bookName } 
      ]
    });

    if (existingBook) {
      console.log('Error: Book with this ID or Name already exists.');
    } else {
      const book = new Book(data);
      const savedData = await book.save();
      console.log('Data saved:', savedData);
    }
  } catch (err) {
    console.error('Error saving data:', err);
  }
}

module.exports = pushdata;

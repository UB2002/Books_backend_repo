const mongoose = require('mongoose');


const Books  = new mongoose.Schema({
    bookID: { type: Number, required: true, unique: true },
    bookName: { type: String, required: true },
    authorName: { type: String, required: true },
    yearOfPublication: { type: Number, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    pages: { type: Number, required: true },
    condition: { type: String, required: true, enum: ['new', 'used'] },
    description: { type: String }
});

module.exports = mongoose.model('Books',Books);
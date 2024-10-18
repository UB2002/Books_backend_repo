const express = require('express');
const Book = require('../Database/model');
const router = express.Router();

router.get('/',async (req, res) => {
  try {
    const data = await Book.find();
    res.status(200).json({ data });
    console.log(data);
  } catch (err) {
    res.status(500).json({ err });
  }
});

router.post('/post', async (req, res) => {
    try {
      const newComicBook = new Book(req.body);
      await newComicBook.save();
      res.status(201).json(newComicBook);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
});

// Update Route
router.put('/updatebyid/:bookID', async (req, res) => {
    try {
        const updatedComicBook = await Book.findOneAndUpdate(
            { bookID: req.params.bookID }, // Correctly query by bookID
            req.body,
            {
                new: true, // Return the updated document
                runValidators: true // Ensure the validation rules are applied
            }
        );

        if (!updatedComicBook) {
            return res.status(404).json({ message: 'No book found to update' });
        }

        res.status(200).json({ updatedComicBook });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


router.get('/getbyid/:bookID', async (req, res) => {
    try {
        const data = await Book.findOne({ bookID: req.params.bookID });
        if (!data) {
            return res.status(404).json({ message: 'No book found' });
        }
        res.status(200).json({ message:'data found', DBdata: data });
        console.log(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
});

router.delete('/deletebyid/:boodID', async(req, res) =>{
    try{
        const data_to_delete = await Book.findOneAndDelete({bookID: req.params.boodID});

        if(!data_to_delete){
            return res.status(404).json({ message: 'No book found' });
        }
        res.status(200).json({message: 'deleted the book ', Deleted_data: data_to_delete});
    }
    catch(err){
        res.status(400).json({ message: err.message });
        console.log(err);
    }
});

module.exports = router; 
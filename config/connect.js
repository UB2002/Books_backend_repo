require("dotenv").config();
const mongoose = require("mongoose");
const url = process.env.URL;

const connect = async () => {
  try {
    await mongoose.connect(url);
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connect;

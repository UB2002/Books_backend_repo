//import pushdata from './fakedata';
const express = require("express");
const app = express();
app.use(express.json());
const Bookroutes = require('./Routes/BookRoutes')
const connect = require('./config/connect');


app.get('/Books', (req, res) => {
  res.send("hello world");
});

app.use('/api', Bookroutes);


connect();

app.listen(3000, () => {
  console.log("Server is running \n");
  console.log(`http://localhost:3000`);
});

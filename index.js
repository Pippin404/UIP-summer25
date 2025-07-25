const express = require('express');
const app = express();
const path = require('path');
const mongoose = require ('mongoose');

require("dotenv").config();

app.use(express.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  next();
});


app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));



//USER ROUTES
const userRoutes = require('./server/routes/user');
app.use('/user', userRoutes);

const reviewRoutes = require('./server/routes/review');
app.use('/review', reviewRoutes);

const commentRoutes = require('./server/routes/comment');
app.use('/comment', commentRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}!!`);
});


//console.log(process.env.dbURL)
mongoose.connect(process.env.dbURL)
.then(console.log("Connected to MongoDB"))
.catch(error => console.log(error));
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

//Connect to db
mongoose.connect(config.database);

//On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database '+config.database);
});

//On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error: '+err);
});

//Initialize express
const app = express();

//Bring in Users Folder
const users = require('./routes/users');

//Port
const port = 3000;

//CORS middleware
app.use(cors());

//Static Folder
app.use(express.static(path.join(__dirname, 'public')));

//bodyParser
app.use(bodyParser.json());

app.use('/users', users);

//testing home route
app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});

app.listen(port, () => {
  console.log('Server started on port '+port);
});

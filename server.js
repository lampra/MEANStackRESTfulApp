const express = require('express');
const path = require('path');
const bodyParser = require('body-Parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const router = express.Router('route');

const config = require('./config/database');
const app = express();
const users = require('./routes/users');
const scores = require('./routes/scores');

// Global variables and aliases
var port = process.env.PORT || 3000;

mongoose.connect(config.database);
mongoose.connection.once('open', function () {
  console.log('Connected to database in ' + config.database);
});
mongoose.connection.on('error', function () {
  console.info('Error: Could not connect to MongoDB');
});


//cors enables to access server from different domains
app.use(cors());
//Set the static folder (like www), I call it Public
app.use(express.static(path.join(__dirname, 'public')));

//Body Parser middleware
app.use(bodyParser.json());

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());


// route to users
app.use('/users', users);
//route to scores
app.use('/scores', scores);

//Index Route
app.get('/', (req, res, next) => {
  res.send('Invalid Endpoint');
});

app.listen(port, () => {
  console.log('Server started on port ' + port);
});
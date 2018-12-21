//initialize app
const express = require('express');
const app = express();

//middleware
// // logging middleware
const morgan = require('morgan');
// // parsing middleware
const bodyParser = require('body-parser')
const path = require('path');

app.use(morgan('dev'));
// // static middleware
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

//routes
app.use('/api', require('../apiRoutes'));

//send index.html
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../index.html'))
})

//error handling
app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
})

// //listener
// const port = process.env.PORT || 3000;
// app.listen(port, function() {
//   console.log("knock, knock");
//   console.log("whose there?");
//   console.log(`Your server, listening on port ${port}`);
// });

module.export = app;

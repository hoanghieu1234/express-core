const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const app = express();

//Middleware
app.use(express.urlencoded()); // Biên dịch url
app.use(bodyParser.json()); // Lấy body
app.use(morgan('dev')); // Logger err
app.use(helmet());
app.use(cors()); // chia sẻ tài nguyên giữa client và server

//Database

//Router

app.get('/', (req, res) => {
  res.status(200).send('Hello');
});

//Handle errors

module.exports = app;

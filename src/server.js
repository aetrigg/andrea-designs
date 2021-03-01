const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const nodemailer = require('nodemailer');
const port = 4444;

app.use(cors());
app.use(express.json());

app.use('/sendmail', require('./sendmail.js'))


app.listen(port, () => {
    console.log(`app is live on ${port}`)
  })
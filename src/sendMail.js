const express = require('express');
const sendMailRouter = express.Router();
const nodemailer = require('nodemailer');

module.exports = sendMailRouter;

const transport = {
  //all of the configuration for making a site send an email.
  name: 'example.com',
  host: 'smtp.outlook.com',
  port: 587,
  auth: {
    user: process.env.THE_EMAIL,
    pass: process.env.THE_PASSWORD
  },
  sendMail: true
};

const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if(error) {
    //if error happened code ends here
    console.error(error)
  } else {
    //this means success
    console.log('transport was successful, ')
  }
});

sendMailRouter.post('/', (req, res, next) => {
  //make mailable object
  var name = req.body.name
  var email = req.body.email
  var subject = req.body.subject
  var message = req.body.message
  var content = `New Message from Andrea Designs!
From: ${name} at ${email}
Message: ${message}`

  var mail = {
    from: 'hello@designsbyandrea.me',
    to: 'hello@designsbyandrea.me',
    subject: subject,
    text: content
  }
  
  transporter.sendMail(mail, (err,data) => {
    if(err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
        status: 'success'
      })
    }
  })
});
const express = require('express');
const sendMailRouter = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

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

/*const nodemailer = require('nodemailer');
require('dotenv').config();

exports.handler = function(event, context, callback) {

  let data = JSON.parse(event.body)

    let transporter = nodemailer.createTransport({
        host:'smtp.outlook.com',
        port:587,
        auth:{
          user:process.env.THE_EMAIL,
          pass:process.env.THE_PASSWORD
        }
    });

    transporter.verify((error, success) => {
      if(error) {
        //if error happened code ends here
        console.error(error)
      } else {
        //this means success
        console.log('transport was successful, ')
      }
    });

    transporter.sendMail({
      from: 'hello@designsbyandrea.me',
      to: 'hello@designsbyandrea.me',
      subject: `${data.subject}`,
      html: `
        <h3>New Email from ${data.name} <a href="mailto:${data.email}>">${data.email}</a></h3>
        <br/>
        <p>${data.message}</p>
      `
    }, function(error, info){
      if(error){
        callback(error);
      }else{
        callback(null, {
          statusCode:200,
          
        });
      };
    });
    
};*/
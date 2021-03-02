const nodemailer = require('nodemailer');

exports.handler = function(event, context, callback) {
    let transporter = nodemailer.createTransport({
        host: 'smtp.outlook.com',
        port: 587,
        auth: {
            user: process.env.THE_EMAIL,
            password: process.env.THE_PASSWORD
        }
    });
    
    var name = req.body.name
    var email = req.body.email
    var subject = req.body.subject
    var message = req.body.message
    var content = `New Message from Andrea Designs! From: ${name} at ${email} Message: ${message}`

    console.log(content);

    transporter.sendMail({
        from: 'hello@designsbyandrea.me',
        to: 'hello@designsbyandrea.me',
        subject: subject,
        text: content
    }, function(error, info) {
    	if (error) {
    		callback(error);
    	} else {
    		callback(null, {
			    statusCode: 200
	    	});
    	}
    });
}
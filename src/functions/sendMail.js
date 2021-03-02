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
    
    /*var name = body.name
    var email = body.email
    var subject = body.subject
    var message = body.message
    var content = `New Message from Andrea Designs! From: ${name} at ${email} Message: ${message}`*/

    let formName = this.$refs.formTag.getAttribute('name');
    let formData = new FormData();

    formData.append('form-name', formName)
    formData.append('name', this.name);
    formData.append('email', this.email);
    formData.append('subject', this.subject);
    formData.append('message', this.message);

    var content = `New Message from Andrea Designs! From ${this.name} at ${this.email} Message: ${this.message}`

    console.log(content);

    transporter.sendMail({
        from: 'hello@designsbyandrea.me',
        to: 'hello@designsbyandrea.me',
        subject: this.subject,
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
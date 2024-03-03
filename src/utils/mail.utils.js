const nodeMailer = require("nodemailer");

const transporter = nodeMailer.createTransport({
	service: "gmail",
	auth: {
		user: "abut1081@gmail.com",
		pass: "Asd.3330223",
	},
});

var mailOptions = {
	from: "abut1081@gmail.com",
	to: "abutahermuhammad@outlook.com",
	subject: "Sending Email using Node.js",
	text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
	if (error) {
		console.log(error);
	} else {
		console.log("Email sent: " + info.response);
	}
});

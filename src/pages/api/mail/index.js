// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from "nodemailer";


// Create a nodemailer transporter using your SMTP credentials
const transporter = nodemailer.createTransport({
	host: 'mail.dot9.dev', // e.g., 'smtp.gmail.com'
	port: 465, // specify your SMTP port
	secure: false, // false for TLS; true for SSL
	auth: {
	  user: 'muhammad@dot9.dev', // your email address
	  pass: 'your-password' // your email password or app-specific password
	}
});
  
export default async function handler(req, res) {
	switch (req.method) {
		case "GET":
			return res.status(200).json({
				status: req.status,
				method: req.method,
				body: req.body,
				query: req.query,
				headers: req.headers,
			});
		case "POST":
			const { name, email, phone, message } = req.body;

			const mailOptions = {
				from: email, // sender address
				to: 'abut1081@gmail.com', // recipient(s) address
				subject: "Contact email from portfolio", // subject line
				text: message
			};
		
			// Send the email
			transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				console.error('Error occurred while sending email:', error);
				res.status(500).json({ error: 'Error occurred while sending email' });
			} else {
				console.log('Email sent successfully:', info.response);
				res.json({ message: 'Email sent successfully' });
			}
			});			
			
			return res.status(200).json({
				status: req.status,
				method: req.method,
				body: req.body,
				query: req.query,
				headers: req.headers,
			});
	}
}

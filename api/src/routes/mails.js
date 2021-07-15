const {Router} = require('express');
const nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
const router = Router();

router.post('/', (req, res) => {
	const {name, subjet, message} = req.body;
	var transporter = nodemailer.createTransport(
		smtpTransport({
			service: 'gmail',
			host: 'smtp.gmail.com',
			auth: {
				user: 'houseOfWinesHr@gmail.com',
				pass: 'jjjteemmg',
			},
		})
	);
	var mailOptions = {
		from: 'houseOfWinesHr@gmail.com',
		to: 'houseOfWinesHr@gmail.com',
		subject: subjet,
		text: 'esto es una prueba',
		html: `<h2>House Of Wines</h2>
		<h3>mensaje de: ${name}</h3>
		<p>mensaje: ${message}</p>`,
	};

	transporter.sendMail(mailOptions, (err, info) => {
		if (err) {
			return res.status(500).send(err.message);
		}
		return res.send('ok');
	});
});

module.exports = router;

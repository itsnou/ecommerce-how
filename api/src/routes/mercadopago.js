// avances pre julian
const {Router} = require('express');
const router = Router();
const mercadopago = require('mercadopago');

mercadopago.configure({
	access_token:
		'TEST-3886982048825324-071417-78b25982e05ba3f21663b439b9a051e1-185367723',
});

router.post('/create_preference', async (req, res) => {
	const {name, quantity, price} = req.body;

	const preference = {
		items: [
			{
				title: name,
				unit_price: price,
				quantity: quantity,
			},
		],
		back_urls: {
			success: 'https://localhost:3000/', //PONER PAGINA QUE QUEREMOS QUE NOS VAYA CUANDOS EFECTUA EL PAGO
			pending: 'https://localhost:3000.com/pending',
			failure: 'https://localhost:3000.com/error',
		},
		auto_return: 'approved',
	};
	try {
		const response = await mercadopago.preferences.create(preference);
		res.send(response);
	} catch (error) {
		res.send(error);
	}
});

module.exports = router;

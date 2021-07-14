const { Router } = require('express');
const router = Router();
const mercadopago = require('mercadopago');
const {
    MercadoPagoResponse,
} = require('mercadopago/utils/mercadopago-respose');

mercadopago.configure({
    access_token:
        'TEST-3886982048825324-071417-78b25982e05ba3f21663b439b9a051e1-185367723',
});

router.post('/create_preference', (req, res) => {
    const { name, quantity, price } = req.body;
    const preference = {
        items: [
            {
                name: name,
                quantity: Number(quantity),
                unit_price: Number(price),
            },
        ],
        back_urls: {
            success: 'https://localhost:3000/success', //PONER PAGINA QUE QUEREMOS QUE NOS VAYA CUANDOS EFECTUA EL PAGO
            pending: 'https://localhost:3000.com/pending',
            failure: 'https://localhost:3000.com/error',
        },
        auto_return: 'approved',
    };

    mercadopago.preferences
        .create(preference)
        .then((res) => {
            res.json({ id: res.body.id });
        })
        .catch((err) => {
            console.log(err);
        });
});

mercadopago.preferences.create(preference);

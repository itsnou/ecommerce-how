const { Router } = require("express");
const nodemailer = require("nodemailer");
var smtpTransport = require("nodemailer-smtp-transport");
const router = Router();
const passport = require("passport");
const jwt_decode = require("jwt-decode");
const userSchema = require("../models/users");

router.post("/", async (req, res) => {
  const { name, subjet, message } = req.body;
  var transporter = nodemailer.createTransport(
    smtpTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      auth: {
        user: "houseOfWinesHr@gmail.com",
        pass: "jjjteemmg",
      },
    })
  );
  var mailOptions = {
    from: "houseOfWinesHr@gmail.com",
    to: "houseOfWinesHr@gmail.com",
    subject: subjet,
    text: "esto es una prueba",
    html: `<h2>House Of Wines</h2>
		<h3>mensaje de: ${name}</h3>
		<p>mensaje: ${message}</p>`,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    return res.send("ok");
  });
});

router.post(
  "/confirmation",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { totalAmount } = req.body;
    const token = req.headers.authorization.split(" ");
    const decodificado = jwt_decode(token[1]);
    const findUser = await userSchema.findOne({ email: decodificado.email });
    const transporter = nodemailer.createTransport(
      smtpTransport({
        service: "gmail",
        host: "stmp.gmail.com",
        auth: {
          user: "houseOfWinesHr@gmail.com",
          pass: "jjjteemmg",
        },
      })
    );
    const mailOptions = {
      from: "houseOfWinesHr@gmail.com",
      to: `${decodificado.email}`,
      subject: "Confirmación de compra House of Wines",
      text: "La compra fue realizada con exito",
      html: `<h2>El total de la compra fue:${totalAmount}</h2>`,
    };
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return res.status(500).send(err.message);
      }
      return res.send("Se envió el correo");
    });
  }
);

router.post(
  "/orderstatus",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { id, clientEmail } = req.body;
    console.log(id);
    console.log(clientEmail);

    const transporter = nodemailer.createTransport(
      smtpTransport({
        service: "gmail",
        host: "stmp.gmail.com",
        auth: {
          user: "houseOfWinesHr@gmail.com",
          pass: "jjjteemmg",
        },
      })
    );
    const mailOptions = {
      from: "houseOfWinesHr@gmail.com",
      to: `${clientEmail}`,
      subject: `Pedido #${id}`,
      text: "Despacho de pedido exitoso.",
      html: `<h2>Su pedido está en camino </h2>`,
    };
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return res.status(500).send(err.message);
      }
      return res.send("Se envió el correo");
    });
  }
);

router.post(
  "/newsletter",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { product, reason, email, name } = req.body;
    const transporter = await nodemailer.createTransport(
      smtpTransport({
        service: "gmail",
        host: "stmp.gmail.com",
        auth: {
          user: "houseOfWinesHr@gmail.com",
          pass: "jjjteemmg",
        },
      })
    );
    if (reason === "stock") {
      const mailOptions = {
        from: "houseOfWinesHr@gmail.com",
        to: `${email}`,
        subject: `¡Hay stock de ${product}!`,
        text: `¡Hola, ${name}`,
        html: `<h2>Queremos informarle que existe stock del producto ${product} que usted tiene en su wishlist</h2>`,
      };
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          return res.status(500).send(err.message);
        }
        return res.send("Se envió el correo");
      });
    }

    if (reason === "discount") {
      const mailOptions = {
        from: "houseOfWinesHr@gmail.com",
        to: `${email}`,
        subject: `¡El producto ${product} está en oferta!`,
        text: `¡Hola, ${name}`,
        html: `<h2>Queremos informarle que existe oferta del producto ${product} que usted tiene en su wishlist</h2>`,
      };
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          return res.status(500).send(err.message);
        }
        return res.send("Se envió el correo");
      });
    }
  }
);

module.exports = router;

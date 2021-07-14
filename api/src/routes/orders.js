const { Router } = require("express");
const router = Router();
const orderSchema = require("../models/orders");
const invoiceSchema = require("../models/invoices");
const userSchema = require("../models/users");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const jwt_decode = require("jwt-decode");


router.get(
  '/:id',
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const token = req.headers.authorization.split(" ");
    const decodificado = jwt_decode(token[1]);
    const findUser = await userSchema.findOne({ email: decodificado.email });
  try {
    const { id } = req.params;
    const orderById = await orderSchema.findById(id);
    res.send(orderById)
  } catch (err) {
    return res.status(404).send('Order not found')
  }
})

router.get("/", async (req, res) => {
  const { userName, date } = req.query;

  if (userName) {
    try {
      const ordersByUser = await orderSchema
        .find()
        .populate("user")
        .populate("invoice");
      const filter = ordersByUser.filter((order) => {
        order.user.email.toLowerCase().includes(userName.toLowerCase());
      });
      return res.send(filter);
    } catch (err) {
      return res.status(404).send("User without orders");
    }
  }
  if (date) {
    try {
      const ordersByDate = await orderSchema
        .find({ date: date })
        .populate("user")
        .populate("invoice");
      return res.send(ordersByDate);
    } catch (err) {
      return res.status(404).send("Date without orders");
    }
  }
  const getAllOrders = await orderSchema
    .find()
    .populate("user")
    .populate("invoice");
  return res.send(getAllOrders);
});

router.post("/", async (req, res) => {
  try {
    const { user, invoice } = req.body;
    const invoiceData = await invoiceSchema.findById(invoice);
    const userData = await userSchema.findById(user);
    const data = {
      user: userData._id,
      invoice: invoiceData._id,
      //  items: invoiceData.items
    };
    const newOrder = await new orderSchema(data);
    await newOrder.save();
    return res.send(newOrder);
  } catch (err) {
    return res.status(404).send(err);
  }
});

router.put(
  '/modify',
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const token = req.headers.authorization.split(" ");
    const decodificado = jwt_decode(token[1]);
    const findUser = await userSchema.findOne({ email: decodificado.email });
    if(findUser.userStatus === 'Admin') {
      const { id, state } = req.body;
      const update = { state: state };
      const order = await orderSchema.findByIdAndUpdate(id, update);
      res.send('Order state updated');
    } else {
      res.status(401).send({message: 'Unauthorized'})
    }
  }
)

module.exports = router;

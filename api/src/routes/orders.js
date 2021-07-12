const { Router } = require("express");
const router = Router();
const orderSchema = require("../models/orders");
const invoiceSchema = require("../models/invoices");
const userSchema = require("../models/users");

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
    console.log(newOrder.invoice)
    return res.send(newOrder);
  } catch (err) {
    return res.status(404).send(err);
  }
});

module.exports = router;

const { Router } = require("express");
const router = Router();
const users = require("../models/users.js");
const productSchema = require("../models/products");
const invoiceSchema = require("../models/invoices");
const orders = require("../models/orders");

router.get("/", async (req, res) => {
  const cualquiera = await invoiceSchema.find({}).populate("products");
  res.send(cualquiera);
});

router.post("/", (req, res) => {
  const productId = productSchema.findById(req.body.id);
  const newProduct = new invoiceSchema();
  newProduct.products.push(productId._conditions._id);
  newProduct.save();
  res.send("Post OK");
});

module.exports = router;

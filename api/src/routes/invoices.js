const { Router } = require("express");
const router = Router();
const orderSchema = require("../models/orders");
const userSchema = require("../models/users");
const invoiceSchema = require("../models/invoices");
const productSchema = require("../models/products");

router.get("/", async (req, res) => {
  try {
    const allInvoices = await invoiceSchema.find();
    res.send(allInvoices);
  } catch (err) {
    res.status(404).send("No hay ninguna factura");
  }
});

router.post("/", async (req, res) => {
  try {
    const { items, totalAmount } = req.body;
    const data = {
      items: items,
      totalAmount: totalAmount,
    };
    const newInvoice = await new invoiceSchema(data);
    await newInvoice.save();
    return res.send(newInvoice._id);
  } catch (err) {
    return res.status(404).send(err);
  }
});

router.put("/", async (req, res) => {
  try {
    const { items } = req.body;
    for (let i = 0; i < items.length; i++) {
      let productStock = await productSchema.findOne({
        name: `${items[i].name}`,
      });
      let actualStock = productStock.stock - items[i].quantity;
      let stockUpdate = await productSchema.findOneAndUpdate(
        { name: `${items[i].name}` },
        { stock: actualStock }
      );
    }
    return res.send("Actualizado");
  } catch (err) {
    return res.status(404).send("No se actualizar el stock.");
  }
});

module.exports = router;

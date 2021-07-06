const { Router } = require("express");
const router = Router();
const users = require("../models/users.js");
const productSchema = require("../models/products");
const invoiceSchema = require("../models/invoices");
const orders = require("../models/orders");

router.get("/", async (req, res) => {
  const products = await productSchema.find();
  res.send(products);

});

//Pruebas de rutas
router.post("/", async (req, res) => {
  const data = {
    name: req.body.name,
    price: req.body.price,
    vineyard: req.body.vineyard,
    rating: [5],
    description: req.body.description,
    category: req.body.category,
    stock: req.body.stock,
    imageUrl: req.body.imageUrl,
    varietal: req.body.varietal,
    year: req.body.year,
  };
  const newProduct = await new productSchema(data);
  newProduct.save();
  res.send("post Ok");
});

module.exports = router;

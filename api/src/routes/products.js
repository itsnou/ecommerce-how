const { Router } = require("express");
const router = Router();
const productSchema = require("../models/products");

router.get("/", async (req, res) => {
  const { category, name, vineyard } = req.query;
  if (vineyard) {
    try {
      const productsByVineyard = await productSchema.find({
        vineyard: vineyard,
      });
      return res.send(productsByVineyard);
    } catch (err) {
      return res.status(404).send("Sorry... Vineyard not found");
    }
  }
  if (category) {
    try {
      const productsByCategory = await productSchema.find({
        category: category,
      });
      return res.send(productsByCategory);
    } catch (err) {
      return res.status(404).send("The category was not found");
    }
  }
  if (name) {
    try {
      const productsByName = await productSchema.find();
      let filter = productsByName.filter((product) =>
        product.name.toLowerCase().includes(name.toLowerCase())
      );
      return res.send(filter);
    } catch (err) {
      return res.status(404).send("The wine was not found");
    }
  }
  const products = await productSchema.find();
  res.send(products);
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const productsById = await productSchema.findById(id);
    res.send(productsById);
  } catch (err) {
    return res.status(404).send("Sorry not found");
  }
});

//Pruebas de rutas
router.post("/", async (req, res) => {
  try {
    const {
      name,
      price,
      vineyard,
      description,
      category,
      stock,
      imageUrl,
      varietal,
      year,
    } = req.body;
    const data = {
      name: name,
      price: price,
      vineyard: vineyard,
      rating: [5],
      description: description,
      category: category,
      stock: stock,
      imageUrl: imageUrl,
      varietal: varietal,
      year: year,
    };
    const newProduct = await new productSchema(data);
    newProduct.save();
    res.send("post Ok");
  } catch (err) {
    res.status(404).send(err);
  }
});

module.exports = router;

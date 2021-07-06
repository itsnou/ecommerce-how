const { Router } = require("express");
const productsRoute = require("./products");

const router = Router();

router.use("/products", productsRoute);

module.exports = router;

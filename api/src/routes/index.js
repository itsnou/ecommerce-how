const { Router } = require("express");
const productsRoute = require("./products");
const usersRoute = require("./users");
const ordersRoute = require("./orders");
const invoicesRoute = require("./invoices");
const varietalRoute = require("./varietal");

const router = Router();

router.use("/products", productsRoute);
router.use("/users", usersRoute);
router.use("/orders", ordersRoute);
router.use("/invoices", invoicesRoute);
router.use("/varietal", varietalRoute);

module.exports = router;

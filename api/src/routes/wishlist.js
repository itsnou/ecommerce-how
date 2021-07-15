const { Router } = require("express");
const router = Router();
const wishlistsSchema = require("../models/wishlist");
const userSchema = require("../models/users");
const productSchema = require("../models/products");
const passport = require("passport");
const jwt_decode = require("jwt-decode");
const jwt = require("jsonwebtoken");

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { product } = req.body;
      const token = req.headers.authorization.split(" ");
      const decodificado = jwt_decode(token[1]);
      const findUser = await userSchema.findOne({
        email: decodificado.email,
      });
      if (findUser.userStatus !== "Admin") {
        const allWishList = await wishlistsSchema
          .find({ user: findUser._id })
          .populate("user")
          .populate("product");
        return res.send(allWishList);
      }
      const allWishList = await wishlistsSchema
        .find()
        .populate("user")
        .populate("product");
      return res.send(allWishList);
    } catch (err) {
      res.status(404).send("No autorizado para acceder a la wishlist");
    }
  }
);

router.get(
  "/product",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      console.log("entré");
      const { product } = req.body;
      const token = req.headers.authorization.split(" ");
      const decodificado = jwt_decode(token[1]);
      const findUser = await userSchema.findOne({
        email: decodificado.email,
      });
      const findWine = await productSchema.findOne({ _id: product });
      console.log(findWine._id);
      if (findUser.userStatus === "Admin") {
        const allWishList = await wishlistsSchema
          .find({ product: findWine._id })
          .populate("user")
          .populate("product");
        return res.send(allWishList);
      } else {
        return res.status(400).send("Debe ser admin");
      }
    } catch (err) {
      res.status(404).send("Usuario inexistente");
    }
  }
);

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { product } = req.body;
      console.log(product);
      const token = req.headers.authorization.split(" ");
      const decodificado = jwt_decode(token[1]);
      const findUser = await userSchema.findOne({
        email: decodificado.email,
      });
      const findWine = await productSchema.findOne({ _id: product });
      //console.log(findUser, findWine);
      let data = {
        product: findWine._id,
        user: findUser._id,
      };
      const newWishlist = await new wishlistsSchema(data);
      await newWishlist.save();
      return res.send(newWishlist);
    } catch (err) {
      return res.status(404).send(err);
    }
  }
);

router.delete(
  "/product",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { product } = req.body;
    const token = req.headers.authorization.split(" ");
    const decodificado = jwt_decode(token[1]);
    const findUser = await userSchema.findOne({ email: decodificado.email });
    const findWine = await productSchema.findOne({ _id: product });
    if (findUser.userStatus !== "Admin") {
      const wishlistDelete = await wishlistsSchema.findOneAndDelete({
        product: findWine._id,
        user: findUser._id,
      });
      res.send("Producto eliminado de la wishlist");
    } else {
      res.status(401).send({ message: "No tiene acceso" });
    }
  }
);

module.exports = router;

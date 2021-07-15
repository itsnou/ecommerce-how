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
          .find({ items: product })
          .populate("user")
          .populate("items");
        console.log(allWishList);
        return res.send(allWishList);
      }
      const allWishList = await wishlistsSchema
        .find()
        .populate("user")
        .populate("items");
      return res.send(allWishList);
    } catch (err) {
      res.status(404).send("No autorizado para acceder a las facturas");
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
      findWine = await productSchema.findOne({ _id: product });
      //console.log(findUser, findWine);
      let data = {
        items: findWine._id,
        user: findUser._id,
      };
      const newWishlist = await new wishlistsSchema(data);
      console.log(newWishlist);
      await newWishlist.save();
      return res.send(newWishlist);
    } catch (err) {
      return res.status(404).send(err);
    }
  }
);

module.exports = router;

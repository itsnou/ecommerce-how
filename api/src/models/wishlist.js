const mongoose = require("mongoose");

const WishlistSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { versionKey: false }
);

const WishList = mongoose.model("Wishlist", WishlistSchema, "wishlists");

module.exports = WishList;

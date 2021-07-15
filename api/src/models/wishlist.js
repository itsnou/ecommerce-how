const mongoose = require("mongoose");

const WishlistSchema = new mongoose.Schema(
  {
    items: {
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

const WishList = mongoose.model("Wishlist", WishlistSchema, "whislists");

module.exports = WishList;

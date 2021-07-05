const mongoose = require("mongoose");

const findOrCreate = require("mongoose-findorcreate");

const UsersSchema = new mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
      lowecase: true,
    },
    lastName: {
      required: true,
      type: String,
      lowercase: true,
    },
    //SE DEBE HACER LA VALIDACIÓN
    email: {
      required: true,
      type: String,
    },
    userStatus: {
      required: true,
      type: String,
      enum: ["Premium", "Regular", "Admin"],
    },
    address: {
      required: false,
      type: String,
    },
    //SE DEBE SETEAR EL CRYPTO
    password: {
      required: true,
      type: String,
    },
    orders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
      },
    ],
  },

  { versionKey: false }
);

const User = mongoose.model("User", UsersSchema, "users");

module.exports = User;

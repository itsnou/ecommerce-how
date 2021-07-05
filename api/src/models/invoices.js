const mongoose = require("mongoose");

const InvoicesSchema = new mongoose.Schema(
  {
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],

    total_amount: {
      type: Number,
      required: false,
    },
  },
  {
    versionKey: false,
  }
);

const Invoices = mongoose.model("Invoice", InvoicesSchema, "invoices");

module.exports = Invoices;

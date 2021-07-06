const mongoose = require("mongoose");

const InvoicesSchema = new mongoose.Schema(
  {
    items: [Object], //{name,price,quantity}
    totalAmount: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const Invoices = mongoose.model("Invoice", InvoicesSchema, "invoices");

module.exports = Invoices;

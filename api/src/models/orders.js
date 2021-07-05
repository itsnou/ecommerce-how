const mongoose = require("mongoose");

const OrdersSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
      default: Date.now,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    //FALTA FACTURA
    invoice: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Invoice",
    },
    delivery: {
      type: Boolean,
      default: true,
    },
    //discount:{} AUN POR DEFINIR
    state: {
      required: true,
      type: String,
      enum: ["Pago pendiente", "En preparación", "Finalizado"], //"Cancelado por el usuario"
    },
  },
  {
    versionKey: false,
  }
);

const Order = mongoose.model("Order", OrdersSchema, "orders");

module.exports = Order;

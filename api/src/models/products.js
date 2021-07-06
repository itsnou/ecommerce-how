const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: false,
        },
        vineyard: {
            type: String,
            required: false,
        },
        rating: [Number],
        description: {
            type: String,
            required: false,
        },
        category: {
            type: String,
            required: false,
            enum: ["red", "white", "rose"], //AGREGAR LUEGO MAS CATEGORIAS SI ES NECESARIO
        },
        stock: {
            type: Number,
            required: false,
        },
        discount: {
            type: Number,
            required: false,
            default: 0,
        },
        imageUrl: {
            type: String,
            requiered: true,
        },
        varietal: [String],
        year: {
            type: Number,
            required: false,
        },
        quantity: {
            type: Number,
            require: true,
            default: 1,
        },
    },
    {
        versionKey: false,
    }
);

const Product = mongoose.model("Product", ProductsSchema, "products");

module.exports = Product;

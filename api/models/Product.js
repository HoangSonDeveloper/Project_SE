// const mongoose = require("mongoose");

// const ProductSchema = new mongoose.Schema(
//   {
//     title: { type: String, required: true, unique: true },
//     desc: { type: String, required: true, },
//     img: { type: String, required: true },
//     categories: { type: Array },
//     size: { type: String },
//     color: { type: String },
//     price: { type: Number, required: true },
    
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Product", ProductSchema);
const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    product_id:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    manufacturer:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true
    },    
    quantity:{
        type: Number,
        required: true
    },
    category:{
        type: Array,
        required: true
    },
    image:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Product', productSchema)
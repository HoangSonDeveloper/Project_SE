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
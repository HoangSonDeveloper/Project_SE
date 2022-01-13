const express = require('express')
const router = express.Router()
const Product = require('../models/product')

//GET ALL PRODUCTS
router.get('/', async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({
            message: err.message
        })
    }
})

//GET 1 PRODUCT
router.get("/find/:id", async (req, res) => {
    try {
      const product = await Product.findById(req.params.id)
      res.status(200).json(product)
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
  })

//UPDATE
// router.patch(':/id', async (req, res) => {
//     if (req.body.name != null) {
//         res.newProduct.name = req.body.name
//     }
//     if (req.body.product_id != null) {
//         res.newProduct.product_id = req.body.product_id
//     }
//     if (req.body.manufacturer != null) {
//         res.newProduct.manufacturer = req.body.manufacturer
//     }
//     if (req.body.price != null) {
//         res.newProduct.price = req.body.price
//     }
//     if (req.body.description != null) {
//         res.newProduct.description = req.body.description
//     }
//     if (req.body.quantity != null) {
//         res.newProduct.quantity = req.body.quantity
//     }
//     if (req.body.image != null) {
//         res.newProduct.image = req.body.image
//     }
//     try {
//         const updateProduct = await Product.save()
//         res.status(200).json(updateProduct)
//     } catch (error) {
//         res.status(400).json({
//             message: err.message
//         })
//     }
// })

//CREATE
router.post('/', async (req, res) => {
    const createProduct = await Product(req.body)
    try {
        const newProduct = await createProduct.save()
        res.status(200).json(newProduct)
    } catch (error) {
        res.status(500).json({
            message: err.message
        })
    }
})

//DELETE
router.delete("/:id", async (req, res) => {
    try {
      await Product.findByIdAndDelete(req.params.id)
      res.status(200).json("Product has been deleted...")
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
})

// async function getProduct(req, res, next) {
//     let Products
//     try {
//       subscriber = await Subscriber.findById(req.params.id)
//       if (subscriber == null) {
//         return res.status(404).json({ message: 'Cannot find subscriber' })
//       }
//     } catch (err) {
//       return res.status(500).json({ message: err.message })
//     }
  
//     res.subscriber = subscriber
//     next()
//   }

module.exports = router
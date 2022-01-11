const express = require('express')
const router = express.Router()
const Category = require('../models/categories')

router.get('/', async (req, res) =>{
    try {
        const categories = await Category.find()
        res.json(categories)
    } catch (error) {
        res.status(500).json({
            message: err.message
        })
    }
})

// router.get('/:id', (req, res) =>{
//     res.send(req.params.id)
// })

// router.post('/', (req, res) =>{

// })

module.exports = router
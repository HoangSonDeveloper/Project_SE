const express = require('express');
const router = express.Router();
const Category = require('../models/categories');

router.get('/', async (req, res) =>{
    try {
        const categories = await Category.find()
        res.json(categories)
    } catch (error) {
        res.status(500).json({
            message: err.message
        });
    };
});

//GET 1 CATEGORY
router.get("/find/:id", async (req, res) => {
    try {
      const category = await Category.findById(req.params.id)
      res.status(200).json(category)
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    };
});

// router.post('/', (req, res) =>{

// })

module.exports = router;
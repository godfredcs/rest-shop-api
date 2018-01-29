const express = require('express');

const router = express.Router();

// Handle GET requests to /products.
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Handling GET request to /products"
    });
});

// Handle POST requests to /products.
router.post('/', (req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    };

    res.status(201).json({
        message: "Handling POST request to /products",
        product
    });
});

// Handle getting a unique product with id.
router.get('/:id', (req, res, next) => {
    const id = req.params.id;

    if (id.toLowerCase() === 'special') {
        res.status(200).json({
            message: 'You found the special ID',
            id
        });
    } else {
        res.status(200).json({
            message: 'You passed an ID',
            id
        });
    }
});

// Handle updating a unique product with id.
router.patch('/:id', (req, res, next) => {
    res.status(200).json({
        message: 'Updated product successfully'
    });
});

// Handles deleting a unique product with id.
router.delete('/:id', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted product successfully'
    });
});

module.exports = router;





const express = require('express');

const router = express.Router();

// Handle getting orders.
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Orders have been fetched'
    });
});

// Handle creating an order.
router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Order was created'
    });
});


module.exports = router;

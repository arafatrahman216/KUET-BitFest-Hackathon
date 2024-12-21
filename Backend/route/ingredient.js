const express = require('express');
const router = express.Router();
const rateLimit = require('express-rate-limit');
const ingredientController = require('../controller/ingredient');

// Rate limiting configuration
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: {
        status: 'error',
        message: 'Too many requests, please try again later.'
    }
});

// Apply rate limiter to all routes in this router
router.use(limiter);

// Version 1 routes
router.post('/v1/addingradient', ingredientController.addIngredientGradient);

module.exports = router;

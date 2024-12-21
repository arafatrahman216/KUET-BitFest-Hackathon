const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const { query, validationResult, body } = require('express-validator');
const axios = require('axios');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const ingredientRoutes = require('./route/ingredient');
const updateingredientRoutes = require('./route/updateingredient');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.json());

// Use the routes
app.use('/api', ingredientRoutes);
app.use('/api', updateingredientRoutes);

// Handle 404 routes
app.use((req, res) => {
    res.status(404).json({
        status: 'error',
        message: 'Route not found'
    });
});

// Start the Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

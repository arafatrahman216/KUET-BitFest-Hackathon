const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const { query, validationResult, body } = require('express-validator');
const axios = require('axios');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const ingredientRoutes = require('./route/ingredient');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.json());

const client = require('./db/db.js');


// Use the ingredient routes
app.use('/api', ingredientRoutes);

// Global error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        status: 'error',
        message: 'Something broke!',
        error: process.env.NODE_ENV === 'development' ? err.message : {}
    });
});

// Handle 404 routes
app.use((req, res) => {
    res.status(404).json({
        status: 'error',
        message: 'Route not found'
    });
});

app.get('/recipes', async (req, res) => {
    const recipes = await getRecipes();
    res.json(recipes);

});



// Start the Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

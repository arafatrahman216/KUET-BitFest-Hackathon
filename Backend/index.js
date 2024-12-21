const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const { query, validationResult, body } = require('express-validator');
const axios = require('axios');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.json());


app.post('/input-gradient', (req, res) => {
    
    // Extract data from request body
    const { ingredient_name, quantity, unit } = req.body;
    console.log(req.body);

    // Print the data (as requested)
    console.log({
        ingredient_name,
        quantity,
        unit
    });

    // Send success response
    res.status(200).json({
        message: 'Ingredient data received',
        data: {
            ingredient_name,
            quantity,
            unit
        }
    });
});

// Start the Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

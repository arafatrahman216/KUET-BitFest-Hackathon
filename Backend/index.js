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

const client = require('./db/db.js');

const getRecipes = async () => {
  try {
    const res = await client.query('SELECT * FROM Recipes');
    return res.rows;
  } catch (err) {
    console.error('Error executing query', err.stack);
    return [];
  }
};




app.get('/', (req, res) => {
    getRecipes();
    res.send('Hello, Express!');
});

app.get('/recipes', async (req, res) => {
    const recipes = await getRecipes();
    res.json(recipes);

});



// Start the Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

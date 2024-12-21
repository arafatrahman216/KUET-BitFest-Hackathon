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


app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

// Start the Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

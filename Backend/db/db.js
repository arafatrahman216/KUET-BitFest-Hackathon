const { Client } = require('pg');
require('dotenv').config();

// Configure the PostgreSQL connection
const client = new Client({
  user: 'postgres',        // Database username
  host: 'localhost',            // Database host
  database: 'postgres',    // Database name
  password: 'arafat219',    // Database password
  port: 5432,                   // Default PostgreSQL port
});

// Connect to the database
client.connect()
  .then(() => console.log('Connected to PostgreSQL database'))
  .catch(err => console.error('Connection error', err.stack));

// Export the client for reuse
module.exports = client;

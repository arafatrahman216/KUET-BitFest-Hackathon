const { Client } = require('pg');
require('../../dotenv').config();

// Configure the PostgreSQL connection
const client = new Client({
  user: DB_USER,        // Database username
  host: DB_HOST,            // Database host
  database: DB_NAME,    // Database name
  password: DB_PASSWORD,    // Database password
  port: DB_PORT,                   // Default PostgreSQL port
});

// Connect to the database
client.connect()
  .then(() => console.log('Connected to PostgreSQL database'))
  .catch(err => console.error('Connection error', err.stack));

// Export the client for reuse
module.exports = client;

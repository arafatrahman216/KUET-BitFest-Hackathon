const { client } = require('../db/db.js');

const getRecipes = async () => {
    try {
      const res = await client.query('SELECT * FROM Recipes');
      return res.rows;
    } catch (err) {
      console.error('Error executing query', err.stack);
      return [];
    }
  };

module.exports = {
    getRecipes
};

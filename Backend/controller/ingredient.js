const { getRecipes } = require('../middleware/Recipes');

const ingredientController = {
    // POST Method: Add Ingredient
    addIngredientGradient: async (req, res) => {
        try {
            // Extract data from request body
            const { ingredient_name, quantity, unit } = req.body;

            // Print the data (simulate database insertion here)
            console.log({
                ingredient_name,
                quantity,
                unit
            });

            // Send success response
            res.status(200).json({
                status: 'success',
                message: 'Ingredient data received',
            });
        } catch (error) {
            console.error('Error in addIngredientGradient:', error);
            res.status(500).json({
                status: 'error',
                message: 'Internal server error'
            });
        }
    },

    // GET Method: Retrieve Ingredients
    getIngredients: async (req, res) => {
        try {
            // Simulate fetching data from the database
            const ingredients = await getRecipes();

            // Send success response with data
            res.status(200).json({
                status: 'success',
                data: ingredients,
            });
        } catch (error) {
            console.error('Error in getIngredients:', error);
            res.status(500).json({
                status: 'error',
                message: 'Internal server error'
            });
        }
    }
};

module.exports = ingredientController;

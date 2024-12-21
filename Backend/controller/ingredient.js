const ingredientController = {
    addIngredientGradient: async (req, res) => {
        try {
            // Extract data from request body
            const { ingredient_name, quantity, unit } = req.body;
            
            // Validate required fields
            if (!ingredient_name || !quantity || !unit) {
                return res.status(400).json({
                    status: 'error',
                    message: 'Missing required fields'
                });
            }

            // Print the data
            console.log({
                ingredient_name,
                quantity,
                unit
            });

            // Send success response
            res.status(200).json({
                status: 'success',
                message: 'Ingredient data received',
                data: { ingredient_name, quantity, unit }
            });
        } catch (error) {
            console.error('Error in addIngredientGradient:', error);
            res.status(500).json({
                status: 'error',
                message: 'Internal server error'
            });
        }
    }
};

module.exports = ingredientController;

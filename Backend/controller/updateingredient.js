const updateingredientController = {
    updateIngredientGradient: async (req, res) => {
        try {
            // Extract data from request body
            const { ingredient_name, quantity, unit } = req.body;

            // Print the data
            console.log(req.body);

            // Send success response
            res.status(200).json({
                status: 'success',
                message: 'Ingredient updated successfully',
            });
        } catch (error) {
            console.error('Error in updateIngredientGradient:', error);
            res.status(500).json({
                status: 'error',
                message: 'Internal server error'
            });
        }
    }
};

module.exports = updateingredientController;

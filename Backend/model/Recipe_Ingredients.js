module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('Recipe_Ingredients', {
        Recipe_ID: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'Recipes',
            key: 'Recipe_ID',
          },
          onDelete: 'CASCADE',
        },
        Ingredient_ID: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'Ingredients',
            key: 'Ingredient_ID',
          },
          onDelete: 'CASCADE',
        },
        Quantity: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        Unit: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      });
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('Recipe_Ingredients');
    },
  };
  
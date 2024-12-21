module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('Ingredients', {
        Ingredient_ID: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        Ingredient_Name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        Quantity: {
          type: Sequelize.FLOAT, // Allows both integers and decimals
          allowNull: false,
        },
        Unit: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      });
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('Ingredients');
    },
  };
  
module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('Recipes', {
        Recipe_ID: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        Name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        Cuisine: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        Preparation_Time: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        Instructions: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
      });
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('Recipes');
    },
  };
  
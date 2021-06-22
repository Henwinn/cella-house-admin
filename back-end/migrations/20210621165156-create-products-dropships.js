'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products_dropships', {
      dropshipId: {
        type: Sequelize.INTEGER
      },
      productId: {
        type: Sequelize.INTEGER
      },
      //UNFINISHED
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('products_dropships');
  }
};
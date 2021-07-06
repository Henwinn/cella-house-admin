'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products_dropships', {
      dropshipId: {
        type: Sequelize.INTEGER(5),
        foreignKey: true,
        references: {
          model: 'dropships',
          key: 'id'
        }
      },
      productId: {
        type: Sequelize.INTEGER(5),
        foreignKey: true,
        references: {
          model: 'products',
          key: 'id'
        }
      },
      //UNFINISHED
    }, {
      timestamps: false,
      underscored: false
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('products_dropships');
  }
};
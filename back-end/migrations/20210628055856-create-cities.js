'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      province_id: {
        type: Sequelize.INTEGER(11),
        references: {
          model: 'provinces',
          key: 'id'
        }
      },
      province_name: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING(10)
      },
      city_name: {
        type: Sequelize.STRING
      },
      postal_code: {
        type: Sequelize.STRING(5)
      }
    }, {
      timestamps: false
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cities');
  }
};
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(5)
      },
      fullName: {
        type: Sequelize.STRING(40)
      },
      storeName: {
        type: Sequelize.STRING(40)
      },
      username: {
        type: Sequelize.STRING(30)
      },
      dob: {
        type: Sequelize.DATEONLY
      },
      gender: {
        type: Sequelize.ENUM("Male", "Female", "Other")
      },
      email: {
        type: Sequelize.STRING(30)
      },
      phone: {
        type: Sequelize.STRING(15)
      },
      address: {
        type: Sequelize.TEXT
      },
      password: {
        type: Sequelize.STRING(30)
      },
      profilePic: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING(1),
        defaultValue: 'A'
      },
      roleId: {
        type: Sequelize.INTEGER(1),
        references: {
          model: "roles",
          key: "id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }, {
      underscored: false
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.renameColumn('users', 'createdAt', 'created_at')
    queryInterface.renameColumn('users', 'updatedAt', 'updated_at')
    queryInterface.renameColumn('roles', 'createdAt', 'created_at')
    queryInterface.renameColumn('roles', 'updatedAt', 'updated_at')
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.renameColumn('users', 'created_at', 'createdAt')
    queryInterface.renameColumn('users', 'updated_at', 'updatedAt')
    queryInterface.renameColumn('roles', 'created_at', 'createdAt')
    queryInterface.renameColumn('roles', 'updated_at', 'updatedAt')
  }
};

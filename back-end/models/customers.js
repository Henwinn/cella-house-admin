'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class customers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      customers.belongsToMany(models.users, {through: models.customers_users})
    }
  };
  customers.init({
    name: DataTypes.STRING(40),
    phone: DataTypes.STRING(20)
  }, {
    sequelize,
    modelName: 'customers',
    underscored: false
  });
  return customers;
};
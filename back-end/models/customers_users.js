'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class customers_users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  customers_users.init({
    customerId: DataTypes.INTEGER(5),
    usersId: DataTypes.INTEGER(5)
  }, {
    sequelize,
    modelName: 'customers_users',
    underscored: false,
    timestamps: false
  });
  return customers_users;
};
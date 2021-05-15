'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      users.hasOne(models.roles)
      users.belongsToMany(models.customers, {through: models.customers_users})
    }
  };
  users.init({
    fullName: DataTypes.STRING,
    storeName: DataTypes.STRING,
    username: DataTypes.STRING,
    dob: DataTypes.DATE,
    gender: DataTypes.ENUM("Male", "Female", "Other"),
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    password: DataTypes.STRING,
    profilePic: DataTypes.STRING,
    status: {
      type: DataTypes.STRING(1),
      defaultValue: 'A'
    },
    roleId: {
      type: DataTypes.STRING,
      references: {
        model: "roles",
        key: "id"
      }
    },
  }, {
    sequelize,
    modelName: 'users',
    underscored: false
  });
  return users;
};
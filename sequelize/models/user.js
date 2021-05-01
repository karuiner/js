"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.User.hasMany(models.Comment, {
        foreignKey: "id",
      });
      models.User.belongsToMany(models.Comment, {
        through: models.Likes,
        // as: "liked",
        foreignKey: "user_id",
      });
      // define association here
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};

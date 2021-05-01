"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Comment.belongsTo(models.User, {
        foreignKey: "user_id",
      });
      models.Comment.belongsToMany(models.User, {
        through: models.Likes,
        // as: "counted",
        foreignKey: "cmt_id",
      });
      // define association here
    }
  }
  Comment.init(
    {
      user_id: DataTypes.INTEGER,
      cmt: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Comment",
    }
  );
  return Comment;
};

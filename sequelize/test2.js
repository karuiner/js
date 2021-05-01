const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");
const User = sequelize.define("user", {});
const Project = sequelize.define("project");
User.belongsToMany(Project, { through: "userProjects" });
Project.belongsToMany(User, { through: "userProjects" });

sequelize
  .sync()
  .then(() => {
    return User.findAll({
      include: [
        {
          model: Project,
          through: {
            attributes: ["createdAt"],
          },
        },
      ],
    });
  })
  .then((users) => {
    users.map((user) => {
      console.log(JSON.stringify(user));
      console.log();
    });
  });

const Models = require("./models");
const { Op } = require("sequelize");

Models.User.findAll({
  include: [
    {
      model: Models.Comment,
      include: [
        {
          model: Models.User,
        },
      ],
    },
  ],
}).then((rst) => {
  console.log(rst[0].dataValues);
  for (let i of rst[0].dataValues.Comments) {
    console.log(i.dataValues);
  }
});
// console.log(Models.User.getComment);
// console.dir(Models.Likes);
//console.log(Object.keys(Models.User.options));

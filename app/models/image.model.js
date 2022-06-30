module.exports = (sequelize, Sequelize) => {
  const Image = sequelize.define("image", {
    url: {
      type: Sequelize.STRING,
    },
    type: {
      type: Sequelize.ENUM("B", "P"),
    },
  });

  return Image;
};

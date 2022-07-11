module.exports = (sequelize, Sequelize) => {
  const Review = sequelize.define("reviews", {
    name: {
      type: Sequelize.STRING,
    },
    position: {
      type: Sequelize.STRING,
    },
    avatar: {
      type: Sequelize.STRING,
    },
    stars: {
      type: Sequelize.INTEGER,
    },
    comment: {
      type: Sequelize.TEXT,
    },
    thumbnail: {
      type: Sequelize.STRING,
    },
  });

  return Review;
};

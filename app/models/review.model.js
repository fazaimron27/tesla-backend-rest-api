module.exports = (sequelize, Sequelize) => {
  const Review = sequelize.define("reviews", {
    name: {
      type: Sequelize.STRING,
    },
    email: {
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
    product_id: {
      type: Sequelize.INTEGER,
      references: {
        model: "products",
        key: "id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
    },
  });

  return Review;
};

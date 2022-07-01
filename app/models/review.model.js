module.exports = (sequelize, Sequelize) => {
  const Blog = sequelize.define("reviews", {
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

  return Blog;
};

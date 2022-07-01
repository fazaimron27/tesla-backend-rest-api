module.exports = (sequelize, Sequelize) => {
  const Image = sequelize.define("product_images", {
    url: {
      type: Sequelize.STRING,
    },
    blog_id: {
      type: Sequelize.INTEGER,
      references: {
        model: "products",
        key: "id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
    },
  });

  return Image;
};

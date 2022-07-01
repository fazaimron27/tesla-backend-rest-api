module.exports = (sequelize, Sequelize) => {
  const Image = sequelize.define("blog_images", {
    url: {
      type: Sequelize.STRING,
    },
    blog_id: {
      type: Sequelize.INTEGER,
      references: {
        model: "blogs",
        key: "id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
    },
  });

  return Image;
};

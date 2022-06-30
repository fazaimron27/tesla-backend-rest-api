module.exports = (sequelize, Sequelize) => {
  const Blog = sequelize.define("blog", {
    title: {
      type: Sequelize.STRING,
    },
    slug: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    content: {
      type: Sequelize.TEXT,
    },
    status: {
      type: Sequelize.BOOLEAN,
    },
    user_id: {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
    },
  });

  return Blog;
};

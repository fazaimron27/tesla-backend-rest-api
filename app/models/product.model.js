module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("products", {
    name: {
      type: Sequelize.STRING,
    },
    slug: {
      type: Sequelize.STRING,
    },
    thumbnail: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
  });

  return Product;
};

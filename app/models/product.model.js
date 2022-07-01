module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("products", {
    name: {
      type: Sequelize.STRING,
    },
    slug: {
      type: Sequelize.STRING,
    },
    thumbnail: {
      type: Sequelize.BOOLEAN,
    },
    price: {
      type: Sequelize.BIGINT,
    },
    description: {
      type: Sequelize.STRING,
    },
    details: {
      type: Sequelize.TEXT,
    },
  });

  return Product;
};

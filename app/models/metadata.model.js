module.exports = (sequelize, Sequelize) => {
  const Metadata = sequelize.define("metadatas", {
    key: {
      type: Sequelize.STRING,
    },
    value: {
      type: Sequelize.STRING,
    },
  });

  return Metadata;
};

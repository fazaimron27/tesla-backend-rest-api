module.exports = (sequelize, Sequelize) => {
  const Metadata = sequelize.define("metadata", {
    key: {
      type: Sequelize.STRING,
    },
    value: {
      type: Sequelize.STRING,
    },
  });

  return Metadata;
};

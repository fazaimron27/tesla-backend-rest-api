module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("teams", {
    name: {
      type: Sequelize.STRING,
    },
    id_card: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    avatar_url: {
      type: Sequelize.STRING,
    },
    gender: {
      type: Sequelize.ENUM("L", "P"),
    },
    address: {
      type: Sequelize.TEXT,
    },
  });

  return User;
};

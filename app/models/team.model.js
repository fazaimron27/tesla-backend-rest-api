module.exports = (sequelize, Sequelize) => {
  const Team = sequelize.define("teams", {
    name: {
      type: Sequelize.STRING,
    },
    id_card: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    avatar: {
      type: Sequelize.STRING,
    },
    role: {
      type: Sequelize.STRING,
    },
    gender: {
      type: Sequelize.ENUM("L", "P"),
    },
    address: {
      type: Sequelize.TEXT,
    },
  });

  return Team;
};

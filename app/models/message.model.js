module.exports = (sequelize, Sequelize) => {
  const Messages = sequelize.define("messages", {
    name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    message: {
      type: Sequelize.TEXT,
    },
  });

  return Messages;
};

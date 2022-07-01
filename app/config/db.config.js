const dotenv = require("dotenv").config();

module.exports = {
  HOST: dotenv.parsed.DB_HOST,
  USER: dotenv.parsed.DB_USER,
  PASSWORD: dotenv.parsed.DB_PASSWORD,
  DB: dotenv.parsed.DB_NAME,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

module.exports = {
  HOST: "128.199.95.116",
  USER: "admin",
  PASSWORD: "admin",
  DB: "tesla_db",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

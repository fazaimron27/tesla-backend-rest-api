module.exports = (app) => {
  const messages = require("../../controllers/message.controller.js");

  const router = require("express").Router();

  router.get("/", messages.index);
  router.post("/", messages.store);

  app.use("/api/messages", router);
};

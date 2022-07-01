module.exports = (app) => {
  const teams = require("../../controllers/team.controller.js");

  var router = require("express").Router();

  router.get("/", teams.index);
  router.post("/", teams.store);
  router.get("/:id", teams.show);
  router.put("/:id", teams.update);
  router.delete("/:id", teams.destroy);

  app.use("/api/teams", router);
};

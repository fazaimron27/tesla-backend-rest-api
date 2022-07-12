module.exports = (app) => {
  const metadatas = require("../../controllers/metadata.controller.js");

  const router = require("express").Router();

  router.get("/", metadatas.index);
  router.post("/", metadatas.store);
  router.get("/:id", metadatas.show);
  router.put("/:id", metadatas.update);
  router.delete("/:id", metadatas.destroy);

  app.use("/api/metadatas", router);
};

module.exports = (app) => {
  const products = require("../../controllers/product.controller.js");

  const router = require("express").Router();

  router.get("/", products.index);
  router.post("/", products.store);
  router.get("/:id", products.show);
  router.put("/:id", products.update);
  router.delete("/:id", products.destroy);

  app.use("/api/products", router);
};

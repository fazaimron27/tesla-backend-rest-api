module.exports = (app) => {
  const reviews = require("../../controllers/review.controller.js");

  const router = require("express").Router();

  router.get("/", reviews.index);
  router.post("/", reviews.store);

  app.use("/api/reviews", router);
};

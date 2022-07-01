module.exports = (app) => {
  const teams = require("../../controllers/team.controller.js");
  const { body, validationResult } = require("express-validator");

  var router = require("express").Router();

  router.get("/", teams.index);
  router.post(
    "/",
    [
      body("name").exists().withMessage("Name is required"),
      body("id_card").exists().withMessage("Id Card is required"),
      body("email")
        .exists()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Email is invalid"),
      body("avatar_url").exists().withMessage("Avatar URL is required"),
      body("gender").exists().withMessage("Gender is required"),
      body("address").exists().withMessage("Address is required"),
    ],
    (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }
      teams.store(req, res);
    }
  );
  router.get("/:id", teams.show);
  router.put(
    "/:id",
    [body("email").isEmail().withMessage("Email is invalid")],
    (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }
      teams.update(req, res);
    }
  );
  router.delete("/:id", teams.destroy);

  app.use("/api/teams", router);
};

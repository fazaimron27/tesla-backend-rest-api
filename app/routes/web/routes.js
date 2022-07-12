module.exports = (app) => {
  const router = require("express").Router();
  const axios = require("axios").default;

  router.get("/", function (req, res) {
    res.render("index", {
      title: "Dashboard",
      styles: ["dataTables.bootstrap4.css", "style.css"],
      scripts: [
        "jquery.dataTables.min.js",
        "dataTables.bootstrap4.min.js",
        "custom.js",
      ],
    });
  });

  // Teams
  router.get("/teams", function (req, res) {
    axios
      .get("http://localhost:8080/api/teams")
      .then(function (response) {
        res.render("teams", {
          title: "Teams",
          styles: ["dataTables.bootstrap4.css", "style.css", "select2.css"],
          scripts: [
            "jquery.dataTables.min.js",
            "dataTables.bootstrap4.min.js",
            "jquery.validate.min.js",
            "select2.min.js",
            "sweetalert2.all.min.js",
            "axios.min.js",
            "custom.js",
          ],
          teams: response.data,
        });
      })
      .catch(function (response) {
        console.log(response);
      });
  });

  router.get("/teams-create", function (req, res) {
    res.render("teams-create", {
      title: "Teams",
      styles: ["style.css", "select2.css"],
      scripts: [
        "jquery.validate.min.js",
        "select2.min.js",
        "sweetalert2.all.min.js",
        "axios.min.js",
        "custom.js",
      ],
    });
  });

  router.get("/teams-edit", function (req, res) {
    res.render("teams-edit", {
      title: "Teams",
      styles: ["style.css", "select2.css"],
      scripts: [
        "jquery.validate.min.js",
        "select2.min.js",
        "sweetalert2.all.min.js",
        "axios.min.js",
        "custom.js",
      ],
    });
  });

  // Products
  router.get("/products", function (req, res) {
    res.render("products", {
      title: "Products",
      styles: ["dataTables.bootstrap4.css", "style.css"],
      scripts: [
        "jquery.dataTables.min.js",
        "dataTables.bootstrap4.min.js",
        "jquery.validate.min.js",
        "custom.js",
      ],
    });
  });

  // Metadata
  router.get("/metadatas", function (req, res) {
    res.render("metadatas", {
      title: "Metadatas",
      styles: ["dataTables.bootstrap4.css", "style.css"],
      scripts: [
        "jquery.dataTables.min.js",
        "dataTables.bootstrap4.min.js",
        "jquery.validate.min.js",
        "custom.js",
      ],
    });
  });

  // Profile
  router.get("/profile", function (req, res) {
    res.render("profile", {
      title: "Profile",
      styles: ["style.css"],
      scripts: ["jquery.validate.min.js", "custom.js"],
    });
  });

  // Settings
  router.get("/settings", function (req, res) {
    res.render("settings", {
      title: "Settings",
      styles: ["style.css"],
      scripts: [
        "jquery.validate.min.js",
        "bootstrap-show-password.js",
        "custom.js",
      ],
    });
  });

  // Auth
  router.get("/login", function (req, res) {
    res.render("login", {
      title: "Login",
      styles: null,
      scripts: ["jquery.validate.min.js"],
    });
  });

  app.use("/", router);
};

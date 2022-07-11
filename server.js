const path = require("path");
const express = require("express");
const cors = require("cors");

const app = express();
app.set("views", path.join(__dirname, "app/views"));
app.set("view engine", "ejs");
app.use("/static", express.static(__dirname + "/public"));

var corsOptions = {
  origin: "http://127.0.0.1:8080",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize
  .sync()
  .then(() => console.log("Synced db."))
  .catch((err) => console.log(`Failed to sync db: ${err.message}`));

// // drop table if it already exists
// db.sequelize
//   .sync({ force: true })
//   .then(() => console.log("Drop and re-sync db."));

// // simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to tesla rest server application." });
// });

// routes
// api routes
require("./app/routes/api/team.routes.js")(app);
require("./app/routes/api/product.routes.js")(app);

// web routes
require("./app/routes/web/routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`));

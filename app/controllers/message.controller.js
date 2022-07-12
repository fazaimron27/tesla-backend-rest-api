const db = require("../models");
const Message = db.messages;

exports.index = (req, res) => {
  Message.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving messages.",
      });
    });
};

exports.store = (req, res) => {
  const message = {
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  };

  Message.create(message)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while adding the Message.",
      });
    });
};

const db = require("../models");
const Team = db.teams;

exports.index = (req, res) => {
  Team.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving teams.",
      });
    });
};

exports.store = (req, res) => {
  const team = {
    name: req.body.name,
    id_card: req.body.id_card,
    email: req.body.email,
    avatar: req.body.avatar,
    gender: req.body.gender,
    address: req.body.address,
  };

  Team.create(team)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while adding the Team.",
      });
    });
};

exports.show = (req, res) => {
  const id = req.params.id;

  Team.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Team with id = ${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Team with id = " + id,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Team.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Team was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Team with id = ${id}. Maybe Team was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Team with id = " + id,
      });
    });
};

exports.destroy = (req, res) => {
  const id = req.params.id;

  Team.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Team was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Team with id = ${id}. Maybe Team was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Team with id = " + id,
      });
    });
};

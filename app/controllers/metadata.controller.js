const db = require("../models");
const Metadata = db.metadatas;
var slugify = require("slugify");

exports.index = (req, res) => {
  Metadata.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving metadatas.",
      });
    });
};

exports.store = (req, res) => {
  const metadata = {
    key: slugify(req.body.key, {
      replacement: "_",
      lower: true,
    }),
    value: req.body.value,
  };

  Metadata.create(metadata)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while adding the Metadata.",
      });
    });
};

exports.show = (req, res) => {
  const id = req.params.id;

  Metadata.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Metadata with id = ${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Metadata with id = " + id,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Metadata.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Metadata was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Metadata with id = ${id}. Maybe Metadata was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Metadata with id = " + id,
      });
    });
};

exports.destroy = (req, res) => {
  const id = req.params.id;

  Metadata.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Metadata was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Metadata with id = ${id}. Maybe Metadata was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Metadata with id = " + id,
      });
    });
};

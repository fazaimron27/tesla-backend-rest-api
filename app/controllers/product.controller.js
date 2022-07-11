const db = require("../models");
const Product = db.products;
var slugify = require("slugify");

exports.index = (req, res) => {
  Product.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products.",
      });
    });
};

exports.store = (req, res) => {
  const product = {
    name: req.body.name,
    slug: slugify(req.body.name, {
      replacement: "-",
      lower: true,
    }),
    thumbnail: req.body.thumbnail,
    description: req.body.description,
    details: req.body.details,
  };

  Product.create(product)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while adding the Product.",
      });
    });
};

exports.show = (req, res) => {
  const id = req.params.id;

  Product.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Product with id = ${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Product with id = " + id,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Product.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Product was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Product with id = ${id}. Maybe Product was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Product with id = " + id,
      });
    });
};

exports.destroy = (req, res) => {
  const id = req.params.id;

  Product.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Product was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Product with id = ${id}. Maybe Product was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Product with id = " + id,
      });
    });
};

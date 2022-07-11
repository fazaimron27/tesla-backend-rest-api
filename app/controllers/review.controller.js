const db = require("../models");
const Review = db.reviews;

exports.index = (req, res) => {
  Review.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving reviews.",
      });
    });
};

exports.store = (req, res) => {
  const review = {
    name: req.body.name,
    position: req.body.position,
    avatar: req.body.avatar,
    stars: req.body.stars,
    comment: req.body.comment,
    thumbnail: req.body.thumbnail,
  };

  Review.create(review)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while adding the review.",
      });
    });
};

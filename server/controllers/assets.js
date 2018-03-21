const { Asset } = require('../models');

module.exports = {
  create(req, res) {
    return Asset.create({
      symbol: req.body.symbol,
      name: req.body.name
    })
      .then(asset => res.status(201).send(asset))
      .catch(error => res.status(400).send(error));
  },

  list(req, res) {
    return Asset.all()
      .then(todos => res.status(200).send(todos))
      .catch(error => res.status(400).send(error));
  }
};

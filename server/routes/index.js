const usersController = require('../controllers').users;
const assetsController = require('../controllers').assets;

module.exports = app => {
  app.get('/api', (req, res) =>
    res.status(200).send({
      message: 'Welcome to the API'
    })
  );

  app.post('/api/users', usersController.create);
  app.get('/api/users', usersController.list);

  app.post('/api/assets', assetsController.create);
  app.get('/api/assets', assetsController.list);
};

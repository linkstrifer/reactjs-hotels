const Controller = require('./hotels.controller');

const Routes = function (app) {
  app.route([
    '/',
    '/:page',
  ])
    .get(Controller.list);

  app.route([
    '/search/:query',
    '/search/:filterParam/:filterValue',
    '/search/:query/:filterParam/:filterValue'
  ])
    .get(Controller.search);
};

module.exports = Routes;

const Controller = require('./hotels.controller');

const Routes = function (app) {
  app.route([
    '/',
    '/:page',
  ])
    .get(Controller.list);

  app.route([
    '/search/:page/:query',
    '/search/:page/:filterParam/:filterValue',
    '/search/:page/:query/:filterParam/:filterValue'
  ])
    .get(Controller.search);
};

module.exports = Routes;

const Controller = require('./hotels.controller');

const Routes = function (app) {
  app.route('/hotels')
    .get(Controller.listHotels);
};

module.exports = Routes;

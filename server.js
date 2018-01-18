const express = require('express');
const Routes = require('./api/hotels/hotels.routes');

const App = express();
const port = process.env.PORT || 8010;

Routes(App);

App.use((req, res) => {
  res.status(404).send(`
    Error:
    The url '${req.originalUrl}' doesn't exist
  `);
});

App.listen(port);

console.log(`API ready on port: ${port}`);

const data = require('./../data.json');

const listHotels = (req, res) => {
  res.json(data);
};

module.exports = {
  listHotels,
};

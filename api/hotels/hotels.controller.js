const data = require('./../data.json');

const limit = 10;

const list = ({ params }, res) => {
  const page = params.page || 0;
  const results = data.slice(page * limit, (page * limit) + limit);
  
  res.json({
    total: results.length,
    results,
  });
};

const search = ({ params }, res) => {
  const page = params.page || 0;
  const query = params.query !== '' ? new RegExp(params.query.toLowerCase(), 'g') : false;
  const filterParam = params.filterParam;
  let results = data
    .filter(hotel => {
      if (query && !query.test(hotel.name.toLowerCase())) {
        return false;
      }

      if (filterParam) {
        const values = params.filterValue.split(',');

        if (!values.some(value => `${value}` === `${hotel[filterParam]}`)) {
          return false;
        }
      }

      return true;
    }
  );

  results = results.slice(page * limit, (page * limit) + limit);

  res.json({
    total: results.length,
    results,
  });
};

module.exports = {
  list,
  search,
};

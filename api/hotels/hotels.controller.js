const data = require('./../data.json');

const list = ({ params }, res) => {
  const page = params.page || 0;
  const results = data.slice(page, page + 10);
  
  res.json({
    total: results.length,
    results,
  });
};

const search = ({ params }, res) => {
  console.log('search');
  const query = params.query ? new RegExp(params.query.toLowerCase(), 'g') : false;
  const filterParam = params.filterParam;
  const results = data
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

  res.json({
    total: results.length,
    results,
  });
};

module.exports = {
  list,
  search,
};

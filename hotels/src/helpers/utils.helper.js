export const mapNumber = (n, callback) => {
  const tempArray = new Array(n);

  return Array.apply(null, tempArray).map(callback);
};

export const getHotelUrl = data => {
  const name = data.name.toLowerCase().replace(/ /g, '-');
  
  return `https://almundo.com.co/hotels/detail/${name}-${data.id}`;
};

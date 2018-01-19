const baseUrl = '//localhost:8010';

const getData = (url = baseUrl) => fetch(url)
    .then(response => response.json());

export const search = (query = '', page = 0) => getData(query !== '' ? `${baseUrl}/search/${page}/${query}` : `${baseUrl}/${page}`);

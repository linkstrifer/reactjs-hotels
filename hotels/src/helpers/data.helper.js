const baseUrl = '//localhost:8010';

export const getData = (url = baseUrl) => fetch(url)
    .then(response => response.json());

export const search = query => getData(query !== '' ? `${baseUrl}/search/${query}` : baseUrl);

const baseUrl = '//localhost:8010';

const getData = (url = baseUrl) => fetch(url)
	.then(response => response.json())
	.catch(error => {
		if (/Failed to fetch/g.test(error)) {
			throw new Error('Expected an object to be thrown');
		}
	});

export const search = (query = '', page = 0) => getData(query !== '' ? `${baseUrl}/search/${page}/${query}` : `${baseUrl}/${page}`);

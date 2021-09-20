let fetchData = require('../utils/fetchData');
let API = 'https://rickandmortyapi.com/api/character/'

fetchData(API)
    .then(response => {
        console.log(response.info.count)
        return fetchData(`${API}${response.results[0].id}`);
    })
    .then(response2 => {
        console.log(response2.name)
        return fetchData(response2.origin.url)
    })
    .then(response3 => {
        console.log(response3.dimension)
    })
    .catch(error => console.log(error));

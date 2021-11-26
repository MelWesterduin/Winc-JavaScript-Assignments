const API_KEY = 'bae906320b64c5f2ef38c9b6210ec1bd';

const getData = async () => {
    const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;

    // let response;
    // await fetch(apiUrl, {method: 'GET'})
    // .then(res => res.json())
    // .then(res => response = res);
    // console.log(response);
    try {
        const response = await fetch(apiUrl, {method: 'GET'});
        const processedResponse = await response.json();
        console.log(processedResponse);
    } catch (error) {
        console.log(error);
    }
};

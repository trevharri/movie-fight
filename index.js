const url = 'http://www.omdbapi.com/'
const apiKey = 'ad44b802'

const fetchData = async (searchTerm) => {
    const response = await axios.get(url, {
        params: {
            apikey: apiKey,
            s: searchTerm

        }
    });
    const data = response.data
    
    if (response.data.Error) {
        return []
    }

    return response.data.Search
    
}


const onInput = async event => {
    const movies =  await fetchData(event.target.value)
    
    for (let movie of movies) {
        const div = document.createElement('div')
        div.innerHTML = `
            <img src="${movie.Poster}" />
            <h1>${movie.Title}</h1>
        `
        document.querySelector('#target').appendChild(div)
    }
}

const input = document.querySelector('input')
input.addEventListener('input', debounce(onInput, 500))

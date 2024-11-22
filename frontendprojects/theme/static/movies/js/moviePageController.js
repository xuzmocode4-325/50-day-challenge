
const API_KEY = JSON.parse(document.getElementById('context-data').textContent).api_key;
const IMG_PATH = `https://image.tmdb.org/t/p/w1280`
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query="`


const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')
const logo = document.getElementById('logo')


const apiUrl = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`





const showMovies = (movies) => {
    main.innerHTML = ''

    movies.forEach(movie => {
        const {title, poster_path, vote_average, overview} = movie;

        const colorCode = getClassByVote(vote_average)

        const voteValue = Math.round(vote_average)
        
        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')
        movieEl.innerHTML = `
        <div id="movie" class="w-72 group cursor-pointer bg-indigo-900 relative overflow-hidden rounded-md shadow-black drop-shadow-md shadow-xl">
            <img class="w-full" src="${IMG_PATH+poster_path}" alt="${title}">
            <div id="movie-info" class="mt-1 flex items-center justify-between py-1 text-indigo-100 px-2">
                <h6 class="truncate">${title}</h6>
                <span class="bg-indigo-950 ${colorCode} p-1 rounded-md">${voteValue} / 10</span>
            </div>
            <div id="overview" class="absolute left-0 bottom-0 right-0 max-h-full 
                bg-gray-950/95 group-hover:translate-y-0 duration-500 ease-in-out
                transform translate-y-[100%] text-gray-300 p-4">
                <h4 class="ml-2">Overview</h4>
                <p class="p-2">${overview}
                </p>
            </div>
        </div>
        `

        main.appendChild(movieEl)
    })

}

const getClassByVote = (vote) => {
    return vote >= 8 ? 'text-green-300'
    : vote >= 5 ? 'text-yellow-500'
    : 'text-red-300'
}

// Get initial movies
const getMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.results)
}

getMovies(apiUrl)


form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value

    if (searchTerm && search.value !== '') {
        getMovies(SEARCH_URL + searchTerm)

        search.value = ''
    } else {
        window.location.reload()
    };
})

logo.addEventListener('click', showMovies())
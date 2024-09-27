document.getElementById('searchButton').addEventListener('click', searchMovies)

let apiKey = '7f6c1ed0970fc2b65c02743f587358b7'
let urlBase = 'https://api.themoviedb.org/3/search/movie'
let urlImg = 'https://image.tmdb.org/t/p/w200'

let resultContainer = document.getElementById('results')

function searchMovies(){
    resultContainer.innerHTML = 'Loading ...'
    let searchInput = document.getElementById('searchInput').value
    fetch(`${urlBase}?query=${searchInput}&api_key=${apiKey}`)
    .then(response => response.json())
    .then(response => displayMovies(response.results))
}

function displayMovies(movies){
    resultContainer.innerHTML = ''

    if(movies.length === 0){
        resultContainer.innerHTML = '<p>No results found for the movie you entered</p>'
        return
    }

    movies.forEach(movie =>{
        let movieDiv = document.createElement('div')
        movieDiv.classList.add('movie')

        let title = document.createElement('h2')
        title.textContent = movie.title

        let releaseDate = document.createElement('p')
        releaseDate.textContent = 'the release date was ' + movie.release_date

        let overview = document.createElement('p')
        overview.textContent = movie.overview

        let posterPath = urlImg + movie.poster_path
        let poster = document.createElement('img')
        poster.src = posterPath

        movieDiv.appendChild(poster) 
        movieDiv.appendChild(title) 
        movieDiv.appendChild(releaseDate) 
        movieDiv.appendChild(overview) 

        resultContainer.appendChild(movieDiv)
    })

}
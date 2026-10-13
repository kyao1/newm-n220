const movies = [
    { title: "Black Panther", year: 2018, genre: "Action", poster: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg" },
    { title: "Creed", year: 2015, genre: "Drama", poster: "https://image.tmdb.org/t/p/w500/1BfTsk5VWuw8FCocAhCyqnRbEzq.jpg" },
    { title: "Hidden Figures", year: 2016, genre: "Drama", poster: "https://image.tmdb.org/t/p/w500/9lfz2W2uGjyow3am00rsPJ8iOyq.jpg" },
    { title: "The Woman King", year: 2022, genre: "Action", poster: "https://image.tmdb.org/t/p/w500/438QXt1E3WJWb3PqNniK0tAE5c1.jpg" },
    { title: "Malcolm X", year: 1992, genre: "Drama", poster: "https://image.tmdb.org/t/p/w500/o2s9ow0uRRm1BcF3teznk5twd90.jpg" },
    { title: "The Pursuit of Happyness", year: 2006, genre: "Drama", poster: "https://image.tmdb.org/t/p/w500/lBYOKAMcxIvuk9s9hMuecB9dPBV.jpg" },
    { title: "Remember the Titans", year: 2000, genre: "Drama", poster: "https://image.tmdb.org/t/p/w500/825ohvC4wZ3gCuncCaqkWeQnK8h.jpg" },
    { title: "Schindler's List", year: 1993, genre: "Drama", poster: "https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg" },
    { title: "The Equalizer", year: 2014, genre: "Action", poster: "https://image.tmdb.org/t/p/w500/9u4yW7yPA0BQ2pv9XwiNzItwvp8.jpg" },
    { title: "Coming to America", year: 1988, genre: "Comedy", poster: "https://image.tmdb.org/t/p/w500/8YZiA1o264dk0cr1USyMdph6SZl.jpg" }
];

const wrapper = document.getElementById("movieList");
const movieCount = document.getElementById("movieCount");
const genreSelect = document.getElementById("genre");
const randomResult = document.getElementById("randomResult");

let currentSort = "";

function render(){
    wrapper.innerHTML = "";

    const visibleMovies = movies.filter((movie) => {
        return genreSelect.value === "All" || movie.genre === genreSelect.value;
    });

    if(currentSort === "title"){
        visibleMovies.sort((a, b) => {
            return a.title.localeCompare(b.title);
        });
    } else if(currentSort === "year"){
        visibleMovies.sort((a, b) => {
            return a.year - b.year;
        });
    }

    movieCount.innerHTML = "Showing " + visibleMovies.length + " of " + movies.length + " movies";

    visibleMovies.forEach((movie) => {
        const ele = document.createElement("div");
        const poster = document.createElement("img");
        const name = document.createElement("h2");
        const year = document.createElement("p");
        const genre = document.createElement("p");

        ele.className = "movie";
        poster.src = movie.poster;
        poster.alt = "Poster for " + movie.title;
        name.innerHTML = movie.title;
        year.innerHTML = "Year: " + movie.year;
        genre.innerHTML = "Genre: " + movie.genre;

        ele.appendChild(poster);
        ele.appendChild(name);
        ele.appendChild(year);
        ele.appendChild(genre);

        wrapper.appendChild(ele);
    });

    if(visibleMovies.length === 0){
        wrapper.innerHTML = "No movies found.";
    }
}

document.getElementById("sortTitle").addEventListener("click", () => {
    currentSort = "title";
    render();
});

document.getElementById("sortYear").addEventListener("click", () => {
    currentSort = "year";
    render();
});

genreSelect.addEventListener("change", () => {
    render();
});

document.getElementById("randomMovie").addEventListener("click", () => {
    randomResult.hidden = false;

    if(movies.length === 0){
        randomResult.innerHTML = "No movies available.";
        return;
    }

    const randomIndex = Math.floor(Math.random() * movies.length);
    const movie = movies[randomIndex];

    randomResult.innerHTML = "Your pick: " + movie.title + " (" + movie.year + ") — " + movie.genre;
});

render();

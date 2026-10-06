const books = [
    { title: "Things Fall Apart", author: "Chinua Achebe", pages: 209, year: 1958, genre: "Fiction" },
    { title: "A Grain of Wheat", author: "Ngugi wa Thiong'o", pages: 247, year: 1967, genre: "Historical" },
    { title: "Season of Migration to the North", author: "Tayeb Salih", pages: 169, year: 1966, genre: "Fiction" },
    { title: "So Long a Letter", author: "Mariama Ba", pages: 90, year: 1979, genre: "Fiction" },
    { title: "Nervous Conditions", author: "Tsitsi Dangarembga", pages: 204, year: 1988, genre: "Fiction" },
    { title: "The Beautyful Ones Are Not Yet Born", author: "Ayi Kwei Armah", pages: 183, year: 1968, genre: "Fiction" },
    { title: "Half of a Yellow Sun", author: "Chimamanda Ngozi Adichie", pages: 433, year: 2006, genre: "Historical" },
    { title: "Disgrace", author: "J. M. Coetzee", pages: 220, year: 1999, genre: "Fiction" },
    { title: "The Famished Road", author: "Ben Okri", pages: 500, year: 1991, genre: "Fantasy" },
    { title: "God's Bits of Wood", author: "Ousmane Sembene", pages: 248, year: 1960, genre: "Historical" },
    { title: "Sleepwalking Land", author: "Mia Couto", pages: 213, year: 1992, genre: "Fiction" },
    { title: "The Cairo Trilogy", author: "Naguib Mahfouz", pages: 1313, year: 1956, genre: "Historical" }
];

const wrapper = document.getElementById("wrapper");

const titleButton = document.getElementById("sortTitle");
const pagesButton = document.getElementById("sortPages");
const yearButton = document.getElementById("sortYear");
const genreSelect = document.getElementById("genreFilter");
const bookCount = document.getElementById("bookCount");


function render(list) {
    const mapped = list.map((book) => {
        return renderBook(book);
    });

    wrapper.innerHTML = mapped.join("");

    bookCount.innerHTML = "Showing " + list.length + " of " + books.length + " books";
}


function renderBook(book) {
    return "<div class='book'>" +
        "<h2>" + book.title + "</h2>" +
        "<p><strong>Author:</strong> " + book.author + "</p>" +
        "<p><strong>Pages:</strong> " + book.pages + "</p>" +
        "<p><strong>Year:</strong> " + book.year + "</p>" +
        "<p><strong>Genre:</strong> " + book.genre + "</p>" +
        "</div>";
}


titleButton.addEventListener("click", function () {
    const genre = genreSelect.value;

    const sorted = books
        .filter((book) => {
            return genre === "all" || book.genre === genre;
        })
        .sort((a, b) => a.title.localeCompare(b.title));

    render(sorted);
});


pagesButton.addEventListener("click", function () {
    const genre = genreSelect.value;

    const sorted = books
        .filter((book) => {
            return genre === "all" || book.genre === genre;
        })
        .sort((a, b) => a.pages - b.pages);

    render(sorted);
});


yearButton.addEventListener("click", function () {
    const genre = genreSelect.value;

    const sorted = books
        .filter((book) => {
            return genre === "all" || book.genre === genre;
        })
        .sort((a, b) => a.year - b.year);

    render(sorted);
});


genreSelect.addEventListener("change", function () {
    const genre = genreSelect.value;

    const filtered = books.filter((book) => {
        return genre === "all" || book.genre === genre;
    });

    render(filtered);
});


render(books);

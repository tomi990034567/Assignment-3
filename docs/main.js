function search() {
    // Saves search input in a variable
    let query = document.getElementById("searchBar").value.toLowerCase();
    let queryWords = query.split(" ");

    // Saves search filter in a variable
    let genre = document.getElementById("genre").value;

    // Removes any books displayed in results grid and search message
    document.getElementById("result-grid").innerHTML = "";
    document.getElementById("searchMessage").innerHTML = "";

    // Creates an empty array for search result
    let searchResult = [];

    // Checks for each book in data if title or author includes query
    for (book of dataset) {
        if (genre == book.genre || genre == "All") {
            // Creates property for search score
            book.score = 0;

            for (word of queryWords) {
                if (book.title.toLocaleLowerCase().includes(word)) {
                    book.score += 1;
                }
                if (book.author.toLocaleLowerCase().includes(word)) {
                    book.score += 1;
                }
            }

            // Adds all matching books to searchResult
            if (book.score > 0) {
                searchResult.push(book)
            }
        }
    }

    // Sorts books in searchResult based on score
    searchResult.sort((a, b) => {
        return b.score - a.score;
    })

    // Uses a function to display all books in searchResult
    for (result of searchResult) {
        displayBooks(result);
    }

    // Displays message about the amount of books found
    if (searchResult.length == 0 || query == "") {
        document.getElementById("result-grid").innerHTML = "";
        let message = document.createElement("p");
        message.innerText = `No results matched your search "${query}"`;
        document.getElementById("searchMessage").appendChild(message);
    }
    else {
        let message = document.createElement("p");
        message.innerText = `Number of books found: ${searchResult.length}`;
        document.getElementById("searchMessage").appendChild(message);
    }
}

function displayBooks(book) {
    // Creates div element for bookCard and adds to result grid
    let div = document.createElement("div");
    div.classList.add("bookCard");
    document.getElementById("result-grid").appendChild(div);

    // Creates image element for cover image and adds to bookCard
    let image = document.createElement("img");
    image.src = book.image;
    image.classList.add("bookImage");
    div.appendChild(image);

    // Creates p element for title and adds to bookCard
    let title = document.createElement("p");
    title.innerText = book.title;
    div.appendChild(title);

    // Creates p element for author and adds to bookCard
    let author = document.createElement("p");
    author.innerText = book.author;
    div.appendChild(author);

    // Creates p element for genre and adds to bookCard
    let genre = document.createElement("p");
    genre.innerText = book.genre;
    div.appendChild(genre);

    // Creates p element for year and adds to bookCard
    let year = document.createElement("p");
    year.innerText = book.year;
    div.appendChild(year);
}

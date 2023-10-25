function search() {
    // Saves search input in a variable
    let query = document.getElementById("searchBar").value.toLowerCase();
    let queryWords = query.split(" ");

    // Saves search filter in a variable
    let genre = document.getElementById("genre").value;

    // Removes any books displayed in results grid and no result message
    document.getElementById("result-grid").innerHTML = "";
    document.getElementById("searchMessage").innerHTML = "";

    // Checks for each book in data if title or author includes query
    for (book of dataset) {
        if (genre == book.genre || genre == "All") {
            for (word of queryWords) {
                if (book.title.toLocaleLowerCase().includes(word) ||
                    book.author.toLocaleLowerCase().includes(word)) {
                    // Uses a function to display all matching books
                    displayBooks(book);
                    break;
                }
            }
        }
    }

    // Displays message if no matching books are found
    if (document.getElementById("result-grid").innerHTML == "" || query == "") {
        document.getElementById("result-grid").innerHTML = "";
        let message = document.createElement("p");
        message.innerText = `No results matched your search "${query}"`;
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
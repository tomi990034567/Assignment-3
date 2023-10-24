// Sample CSV data (you should load your actual CSV data here)
const csvData = `Genre,Author,Title,Year,Additional Information
Non-fiction,Thompson, Hunter S.,Fear and Loathing in Las Vegas,1971,Bio
Non-fiction,Troyat, Henri,Tolstoy,1967,Bio
Non-fiction,Wolfe, Tom,The Electric Kool-Aid Acid Test,1968
Non-fiction,Dalrymple, Theodore,Our Culture: What’s Left of It,2005
Non-fiction,Dalrymple, Theodore,Life at the Bottom: The Worldview That Makes the Underclass,2001
Non-fiction,Nietzsche, Friedrich,On the Genealogy of Morals,1996
Non-fiction,Nietzsche, Friedrich,The Antichrist,2019
Non-fiction,Nietzsche, Friedrich,The Gay Science,2001
Non-fiction,Nietzsche, Friedrich,The Will to Power,2019
Non-fiction,Pirsig, Robert,Zen and the Art of Motorcycle Maintenance,1974
Non-fiction,Frazer, J.G.,The Golden Bough: A Study in Magic and Religion,1963[1922],Available at:
Non-fiction,Durkheim, Émile,The Elementary Forms of Religious Life,1995
Clinical Psychology and Psychiatry,Becker, Ernest,The Denial of Death,2020
Clinical Psychology and Psychiatry,Ellenberger, Henri,The Discovery of the Unconscious,1981
Clinical Psychology and Psychiatry,Eysenck, Hans,Genius,1995
Clinical Psychology and Psychiatry,Freud, Sigmund,An Outline of Psychoanalysis,2003
Clinical Psychology and Psychiatry,Freud, Sigmund,The Interpretation of Dreams,1899,Available online
Clinical Psychology and Psychiatry,Freud, Sigmund,Moses and Monotheism,1939[1939]
Clinical Psychology and Psychiatry,Freud, Sigmund,Three Contributions to the Theory of Sex,2018,Available at
Clinical Psychology and Psychiatry,Freud, Sigmund,Totem and Taboo,2018
Clinical Psychology and Psychiatry,Jung, Carl,Aion,1979
Clinical Psychology and Psychiatry,Jung, Carl,Answer to Job,2010
Clinical Psychology and Psychiatry,Jung, Carl,Archetypes of the Collective Unconscious,1991
Clinical Psychology and Psychiatry,Jung, C. G.,The Integration of the Personality,1939,Available online
Clinical Psychology and Psychiatry,Jung, Carl,Mysterium Coniunctionis,1977
Clinical Psychology and Psychiatry,Jung, Carl,Psychology and Alchemy,1980
Clinical Psychology and Psychiatry,Jung, Carl,Existential Psychology: East and West,2019
Clinical Psychology and Psychiatry,Jung, Carl,Psychology of Religion: East and West,1970
Clinical Psychology and Psychiatry,Jung, Carl,Symbols of Transformation,1977
Clinical Psychology and Psychiatry,May, Rollo, Angel, Ernest & Ellenberger, Henri,Existence: A New Dimension in Psychiatry and Psychology,1958
Clinical Psychology and Psychiatry,Neumann, Erich,The Origins and History of Consciousness,2015
Clinical Psychology and Psychiatry,Neumann, Erich,The Great Mother,1964
Clinical Psychology and Psychiatry,Piaget, Jean,Play, Dreams and Imitation in Childhood,1962
Clinical Psychology and Psychiatry,Piaget, Jean,The Moral Judgment of the Child,2008
Clinical Psychology and Psychiatry,Rogers, Carl,A Way of Being,1995
Clinical Psychology and Psychiatry,Rogers, Carl,On Becoming a Person,1977
Neuroscience,Gibson, James J.,The Ecological Approach to Visual Perception,2014
Neuroscience,Goldberg, Elkhonon,The New Executive Brain,2009
Neuroscience,Gray, Jeffrey and Neil McNaughton,The Neuropsychology of Anxiety,2003
Neuroscience,LeDoux, Joseph,The Emotional Brain,1998
Neuroscience,Sacks, Oliver,The Man who Mistook his Wife for a Hat,2022
Neuroscience,Sacks, Oliver,Awakenings,2012
Neuroscience,Sacks, Oliver,An Anthropologist on Mars,2012
Neuroscience,Swanson, Larry,Brain Architecture: Understanding the Basic Plan,2011
Religion and Religious History,Burton Russell, Jeffrey,Mephistopheles: The Devil in the Modern World,1986
Religion and Religious History,Eliade, Mircea,Myth and Reality,1963
Religion and Religious History,Eliade, Mircea,Myths, Dreams and Mysteries,1960
Religion and Religious History,Eliade, Mircea,Shamanism: Archaic Techniques of Ecstasy,1964
Religion and Religious History,Eliade, Mircea,The Forge and the Crucible,1956
Religion and Religious History,Eliade, Mircea,The Sacred and the Profane,1959
Religion and Religious History,Frye, Northrop,The Great Code,1982
Religion and Religious History,Frye, Northrop,Words with Power,1990
Religion and Religious History,Lewis, Bernard,The Crisis of Islam,2003
Religion and Religious History,Smith, Huston (Introductory),The World’s Religions,2009
Religion and Religious History,The Bible: Designed to be Read as Living Literature,2008,King James Version translation.
Religion and Religious History,Zla-ba-bsam-grub, Evans-Wentz, W.T,The Tibetan Book of the Dead,2013
Religion and Religious History,Coomaraswamy, Ananda K.,The Dance of Śiva: Essays on Indian Art and Culture,1985[1924]
Religion and Religious History,The Bhagavad Gita,1994
Philosophy,Okakura, Kakuzō,The Book of Tea,2020
Philosophy,Watts, Alan,The Way of Zen,1999[1957]
Philosophy,Herrigel, Eugen,Zen in the Art of Archery,1985[1953]
Philosophy,Lao-Tze (Editor),The Canon of Reason and Virtue,1954
Philosophy,Sun, Zi,The Art of War: Complete Texts and Commentaries,2003
Philosophy,Confucius,The Analects of Confucius,1938
Philosophy,Confucius,The Great Digest; The Unwobbling Pivot; The Analects,1969
`;

// Function to search for books
function searchBooks() {
    const searchTerm = document.getElementById("search").value.toLowerCase();
    const searchResults = document.getElementById("search-results");
    searchResults.innerHTML = "";

    // Split the CSV data into rows
    const rows = csvData.split("\n");
    
    // Iterate through rows and search for matching books
    rows.forEach(row => {
        const columns = row.split(",");
        const bookTitle = columns[2].toLowerCase();
        if (bookTitle.includes(searchTerm)) {
            // Display the matching book in the results
            const resultItem = document.createElement("p");
            resultItem.textContent = `Title: ${columns[2]}, Author: ${columns[1]}, Year: ${columns[3]}`;
            searchResults.appendChild(resultItem);
        }
    });
}

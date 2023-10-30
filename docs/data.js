const dataset = [
// Added numbers in comment form to keep track of the curated dataset - L.
//1.
    {
        "genre": "Clinical Psychology and Psychiatry",
        "author": "Becker, Ernest",
        "title": "The Denial of Death",
        "year": 2020,
        "image": "images/Becker.jpg"
    },
	//2.
    {
        "genre": "Religion and Religious History",
        "author": "Burton Russell, Jeffrey",
        "title": "Mephistopheles: The Devil in the Modern World",
        "year": 1986,
        "image": "images/Burton.jpg"
    },
	//3.
    {
        "genre": "Religion and Religious History",
        "author": "Coomaraswamy, Ananda K.",
        "title": "The Dance of Śiva: Essays on Indian Art and Culture",
        "year": 1924,
        "image": "images/Coomaraswamy.jpg"
    },
	//4.
    {
        "genre": "Philosophy",
        "author": "Confucius",
        "title": "The Analects of Confucius",
        "year": 1938,
        "image": "images/Confucius.jpg"
    },
	//5.
    {
        "genre": "Philosophy",
        "author": "Confucius",
        "title": "The Great Digest; The Unwobbling Pivot; The Analects",
        "year": 1969,
        "image": "images/Confucius2.jpg"
    },
	//6.
    {
        "genre": "General Psychology",
        "author": "Dalrymple, Theodore",
        "title": "Life at the Bottom: The Worldview That Makes...",
        "year": 2001,
        "image": "images/Dalrymple.jpg"
    },
	//7.
    {
        "genre": "General Psychology",
        "author": "Dalrymple, Theodore",
        "title": "Our Culture: What’s Left of It",
        "year": 2005,
        "image": "images/Dalrymple2.jpg"
    },
	//8.
    {
        "genre": "General Psychology",
        "author": "Durkheim, Émile",
        "title": "The Elementary Forms of Religious Life",
        "year": 1995,
        "image": "images/Durkheim.jpg"
    },
	//9.
    {
        "genre": "Religion and Religious History",
        "author": "Eliade, Mircea",
        "title": "The Forge and the Crucible",
        "year": 1956,
        "image": "images/Eliade.jpg"
    },
	//10.
    {
        "genre": "Religion and Religious History",
        "author": "Eliade, Mircea",
        "title": "Myth and Reality",
        "year": 1963,
        "image": "images/Eliade2.jpg"
    },
	//11.
    {
        "genre": "Religion and Religious History",
        "author": "Eliade, Mircea",
        "title": "Myths, Dreams and Mysteries",
        "year": 1960,
        "image": "images/Eliade3.jpg"
    },
	//12.
    {
        "genre": "Religion and Religious History",
        "author": "Eliade, Mircea",
        "title": "Shamanism: Archaic Techniques of Ecstasy",
        "year": 1964,
        "image": "images/Eliade4.jpg"
    },
	//13.
    {
        "genre": "Religion and Religious History",
        "author": "Eliade, Mircea",
        "title": "The Sacred and the Profane",
        "year": 1959,
        "image": "images/Eliade5.jpg"
    },
	//14.
    {
        "genre": "Clinical Psychology and Psychiatry",
        "author": "Ellenberger, Henri",
        "title": "The Discovery of the Unconscious",
        "year": 1981,
        "image": "images/Ellenberger.jpg"
    },
	//15.
    {
        "genre": "Clinical Psychology and Psychiatry",
        "author": "Eysenck, Hans",
        "title": "Genius",
        "year": 1995,
        "image": "images/Eysenck.jpg"
    },
	//16.
    {
        "genre": "General Psychology",
        "author": "Frazer, J.G.",
        "title": "The Golden Bough: A Study in Magic and Religion",
        "year": 1922,
        "image": "images/Frazer.jpg"
    },
	//17.
    {
        "genre": "Clinical Psychology and Psychiatry",
        "author": "Freud, Sigmund",
        "title": "The Interpretation of Dreams",
        "year": 1899,
        "image": "images/Freud.jpg"
    },
	//18.
    {
        "genre": "Clinical Psychology and Psychiatry",
        "author": "Freud, Sigmund",
        "title": "Moses and Monotheism",
        "year": 1939,
        "image": "images/Freud2.jpg"
    },
	//19.
    {
        "genre": "Clinical Psychology and Psychiatry",
        "author": "Freud, Sigmund",
        "title": "Three Contributions to the Theory of Sex",
        "year": 2018,
        "image": "images/Freud3.jpg"
    },
	//20.
    {
        "genre": "Clinical Psychology and Psychiatry",
        "author": "Freud, Sigmund",
        "title": "Totem and Taboo",
        "year": 2018,
        "image": "images/Freud4.jpg"
    },
	//21.
    {
        "genre": "Neuroscience",
        "author": "Gibson, James J.",
        "title": "The Ecological Approach to Visual Perception",
        "year": 2014,
        "image": "images/Gibson.jpg"
    },
	//22.
    {
        "genre": "Neuroscience",
        "author": "Goldberg, Elkhonon",
        "title": "The New Executive Brain",
        "year": 2009,
        "image": "images/Goldberg.jpg"
    },
	//23.
    {
        "genre": "Neuroscience",
        "author": "Gray, Jeffrey & Neil McNaughton",
        "title": "The Neuropsychology of Anxiety",
        "year": 2003,
        "image": "images/GN.jpg"
    },
	//24.
    {
        "genre": "Philosophy",
        "author": "Herrigel, Eugen",
        "title": "Zen in the Art of Archery",
        "year": 1953,
        "image": "images/Herrigel.jpg"
    },
	//25.
    {
        "genre": "Clinical Psychology and Psychiatry",
        "author": "Jung, Carl",
        "title": "The Integration of the Personality",
        "year": 1939,
        "image": "images/Jung.jpg"
    },
	//26.
    {
        "genre": "Clinical Psychology and Psychiatry",
        "author": "Jung, Carl",
        "title": "Psychology and Alchemy",
        "year": 1980,
        "image": "images/Jung2.jpg"
    },
    //27.
    {
        "genre": "Clinical Psychology and Psychiatry",
        "author": "Jung, Carl",
        "title": "Symbols of Transformation",
        "year": 1977,
        "image": "images/Jung3.jpg"
    },
	//28.
    {
        "genre": "Clinical Psychology and Psychiatry",
        "author": "Jung, Carl",
        "title": "Aion",
        "year": 1979,
        "image": "images/Jung4.jpg"
    },
	//29.
    {
        "genre": "Clinical Psychology and Psychiatry",
        "author": "Jung, Carl",
        "title": "Modern man in search of a soul ",
        "year": 1933,
        "image": "images/jung5.jpg"
    },
	//30.
    {
        "genre": "Clinical Psychology and Psychiatry",
        "author": "Jung, Carl",
        "title": "Mysterium Coniunctionis",
        "year": 1977,
        "image": "images/jung6.jpg"
    },
	//31.
    {
        "genre": "Clinical Psychology and Psychiatry",
        "author": "Jung, Carl",
        "title": "Psychology of Religion: West and East",
        "year": 1958,
        "image": "images/jung7.jpg"
    },
	//32.
    {
        "genre": "Philosophy",
        "author": "Lao-Tze",
        "title": "The Canon of Reason and Virtue",
        "year": 1954,
        "image": "images/laotze.jpg"
    },
	//33.
    {
        "genre": "Neuroscience",
        "author": "LeDoux, Joseph",
        "title": "The Emotional Brain",
        "year": 1998,
        "image": "images/ledoux.jpg"
    },
	//34.
    {
        "genre": "Religion and Religious History",
        "author": "Lewis, Bernard",
        "title": "The Crisis of Islam",
        "year": 2003,
        "image": "images/lewis.jpg"
    },
	//35.
    {
        "genre": "Clinical Psychology and Psychiatry",
        "author": " May, Rollo, Angel, Ernest & Ellenberger, Henri",
        "title": " Existence: A New Dimension in Psychiatry and Psychology",
        "year": 1958,
        "image": "images/MAE.jpg"
    },
	//36.
    {
        "genre": "Clinical Psychology and Psychiatry",
        "author": "Neumann, Erich",
        "title": "The Great Mother",
        "year": 1964,
        "image": "images/neumann.jpg"
    },
	//37.
    {
        "genre": "Religion and Religious History",
        "author": "Neumann, Erich",
        "title": "The Origins and History of Consciousnes",
        "year": 1949,
        "image": "images/neumann2.jpg"
    },
	//38.
    {
        "genre": "General Psychology",
        "author": "Nietzsche, Friedrich",
        "title": "On the Genealogy of Morals",
        "year": 1996,
        "image": "images/Nietzsche.jpg"
    },
	//39.
    {
        "genre": "General Psychology",
        "author": "Nietzsche, Friedrich",
        "title": "The Antichrist",
        "year": 1990,
        "image": "images/Nietzsche2.jpg"
    },
	//40.
    {
        "genre": "General Psychology",
        "author": "Nietzsche, Friedrichs",
        "title": "The Gay Science",
        "year": 1924,
        "image": "Nietzsche3.jpg"
    },
	//41.
    {
        "genre": "General Psychology",
        "author": "Nietzsche, Friedrich",
        "title": "The Will to Power",
        "year": 1933,
        "image": "Nietzsche4.jpg"
    },
	//42.
    {
        "genre": "Philosophy",
        "author": "Okakura, Kakuzō",
        "title": "The Book of Tea",
        "year": 1906,
        "image": "images/okakura.jpg"
    },
	//43.
    {
        "genre": "General Psychology",
        "author": "Pirsig, Robert",
        "title": "Zen and the Art of Motorcycle Maintenance",
        "year": 1974,
        "image": "images/pirsig.jpg"
    },
	//44.
    {
        "genre": "Clinical Psychology and Psychiatry",
        "author": "Piaget, Jean",
        "title": "Play, Dreams and Imitation in Childhood",
        "year": 1962,
        "image": "images/piaget.jpg"
    },
	//45.
    {
        "genre": "Clinical Psychology and Psychiatry",
        "author": "Piaget, Jean",
        "title": "The Moral Judgment of the Child",
        "year": 1932,
        "image": "images/piaget2.jpg"
    },
	//46.
    {
        "genre": "Clinical Psychology and Psychiatry",
        "author": "Rogers, Carl",
        "title": "A Way of Being",
        "year": 1995,
        "image": "images/rogers.jpg"
    },
	//47.
    {
        "genre": "Clinical Psychology and Psychiatry",
        "author": "Rogers, Carl",
        "title": "On Becoming a Person",
        "year": 1977,
        "image": "images/rogers2.jpg"
    },
	//48.
    {
        "genre": "Neuroscience",
        "author": "Sacks, Oliver",
        "title": "An Anthropologist on Mars",
        "year": 2012,
        "image": "images/sacks.jpg"
    },
	//49.
    {
        "genre": "Neuroscience",
        "author": "Sacks, Oliver",
        "title": "Awakenings",
        "year": 2012,
        "image": "images/sacks2.jpg"
    },
	//50.
    {
        "genre": "Neuroscience",
        "author": "Sacks, Oliver",
        "title": "The Man who Mistook his Wife for a Hat",
        "year": 1985,
        "image": "images/sacks3.jpg"
    },
	//51.
    {
        "genre": "Clinical Psychology and Psychiatry",
        "author": "Tzu, Sun",
        "title": "The Art of War",
        "year": "2003",
        "image": "images/tzu.jpg"
    },
	//52.
    {
        "genre": "Neuroscience",
        "author": "Swanson, Larry",
        "title": "Brain Architecture: Understanding the Basic Plan",
        "year": 2011,
        "image": "images/swanson.jpg"
    },
	//53.
    {
        "genre": "Religion and Religious History",
        "author": "",
        "title": "The Bible",
        "year": 2000,
        "image": "images/bible.jpg"
    },
	//54.
    {
        "genre": "Religion and Religious History",
        "author": "Vyasa",
        "title": "The Bhagavad Gita",
        "year": "1994",
        "image": "images/vyasa.jpg"
    },
	//55.
    {
        "genre": "General Psychology",
        "author": "Thompson, Hunter S.",
        "title": "Fear and Loathing in Las Vegas",
        "year": 1971,
        "image": "images/thompson.jpg"
    },
	//56.
    {
        "genre": "General Psychology",
        "author": "Troyat, Henri",
        "title": "Tolstoy",
        "year": 1967,
        "image": "images/troyat.jpg"
    },
	//57.
    {
        "genre": "Philosophy",
        "author": "Watts, Alan",
        "title": "The Way of Zen",
        "year": 1957,
        "image": "images/watts.jpg"
    },
	//58.
    {
        "genre": "Fiction",
        "author": " Dick, Philip K.",
        "title": "Do Androids Dream of Electric Sheep?",
        "year": 1968,
        "image": "images/Dick.jpg"
    }
];
//subject categories:
//Subject 1: "General Psychology",
//Subject 2: "Clinical Psychology and Psychiatry",
//Subject 3: "Neuroscience",
//Subject 4: "Philosophy",
//Subject 5: "Religion and Religious History",
//Subject 6: "Fiction",
//I added one book within fiction, which is the book Wout mentions in Canvas text (Do androids dream of electric sheep?). -L

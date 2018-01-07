var express = require('express');
var bodyParser = require('body-parser');
var port = +process.argv[2];
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var books = [
    {
        id: 1,
        title: "Wprowadzenie do HTML5",
        authorId: [1,2],
        publication_year: "2011",
        publishing_house: "Helion",
        pages: "240",
        price: "69,99",
    },
    {
        id: 2,
        title: "Tajniki języka Javascript. Asynchronicznośc i wydajność",
        authorId: [1,2,3],
        publication_year: "2016",
        publishing_house: "Helion",
        pages: "96",
        price: "29,99",
    },
    {
        id: 3,
        title: "Android. Programowanie aplikacji",
        authorId: [4,5,1],
        publication_year: "2016",
        publishing_house: "Helion",
        pages: "712",
        price: "99,00",
    },
    {
        id: 4,
        title: "Wprowadzenie do HTML5 2",
        authorId: [2,1],
        publication_year: "2014",
        publishing_house: "Helion",
        pages: "220",
        price: "39,99",
    },
    {
        id: 5,
        title: "Wprowadzenie do HTML5 2",
        authorId: [2,1],
        publication_year: "2014",
        publishing_house: "Helion",
        pages: "220",
        price: "39,99",
    },
    {
        id: 6,
        title: "Wprowadzenie do HTML5 2",
        authorId: [2,1],
        publication_year: "2014",
        publishing_house: "Helion",
        pages: "220",
        price: "39,99",
    },
    {
        id: 7,
        title: "Wprowadzenie do HTML5 2",
        authorId: [2,1],
        publication_year: "2014",
        publishing_house: "Helion",
        pages: "220",
        price: "39,99",
    }
];

var authors = [
    {
        id: 1,
        name: "Bruce",
        surname: "Lawson",
        date_of_birth: "01.08.1990",
        adress: "Warszawa",
        phone: "756 345 897",
        bookId: [1, 4],
    },
    {
        id: 2,
        name: "Remy",
        surname: "Sharp",
        date_of_birth: "24.10.1983",
        adress: "Wrocław",
        phone: "541 234 675",
        bookId: 1,
    },
    {
        id: 3,
        name: "Kyle",
        surname: "Simpson",
        date_of_birth: "28.02.1987",
        adress: "Gdańsk",
        phone: "583 234 895",
        bookId: 2,
    },
    {
        id: 4,
        name: "Dawn",
        surname: "Griffiths",
        date_of_birth: "18.12.1988",
        adress: "Poznań",
        phone: "791 345 767",
        bookId: 3,
    },
    {
        id: 5,
        name: "David",
        surname: "Griffiths",
        date_of_birth: "18.12.1988",
        adress: "Poznań",
        phone: "793 435 969",
        bookId: 3,
    },
];

// BOOKS
// GET – pobranie kolekcji
app.get('/books', function (req, res) {
    res.json(books);
});

// GET/id – pobranie elementu kolekcji
app.get('/books/:id', function (req, res) {
    var book = findBook(parseInt(req.params.id, 10));
    if (book === null) {
        res.send(404);
    }
    else {
        res.json(book);
    }
});

function findBook(id) {
    for (var i = 0; i < books.length; i++) {
        if (books[i].id === id) {
            return books[i];
        }
    }
    return null;
}

// POST – dodanie elementu do kolekcji
app.post('/books', function (req, res) {
    var book = req.body;
    books.push(book);
    res.send(book);
});

// PUT/id – edycja elementu kolekcji
app.put('/books/:id', function (req, res) {
    var book = req.body;
    var currentBook = findBook(parseInt(req.params.id, 10));
    if (currentBook === null) {
        res.send(404);
    }
    else {
        currentBook.title = book.title;
        currentBook.authorId = book.authorId;
        currentBook.publication_year = book.publication_year;
        currentBook.publishing_house = book.publishing_house;
        currentBook.pages = book.pages;
        currentBook.price = book.price;
        res.send(book);
    }
});

// DELETE/id – usunięcie elementu kolekcji
app.delete('/books/:id', function (req, res) {
    var book = findBook(parseInt(req.params.id, 10));
    if (book === null) {
        res.send(404);
    }
    else {
        removeBook(parseInt(req.params.id, 10));
        res.send(book);
    }
});

function removeBook(id) {
    var bookIndex = 0;
    for (var i = 0; i < books.length; i++) {
        if (books[i].id === id) {
            bookIndex = i;
        }
    }
    books.splice(bookIndex, 1);
}

// strona główna
app.get('/books', function (req, res) {
    res.sendFile("books.html", { root: __dirname });
});

// AUTHORS
// GET – pobranie kolekcji
app.get('/authors', function (req, res) {
    res.json(authors);
});

// GET/id – pobranie elementu kolekcji
app.get('/authors/:id', function (req, res) {
    var author = findAuthor(parseInt(req.params.id, 10));
    if (author === null) {
        res.send(404);
    }
    else {
        res.json(author);
    }
});

function findAuthor(id) {
    for (var i = 0; i < authors.length; i++) {
        if (authors[i].id === id) {
            return authors[i];
        }
    }
    return null;
}

// PUT/id – edycja elementu kolekcji
app.put('/authors/:id', function (req, res) {
    var author = req.body;
    var currentAuthor = findAuthor(parseInt(req.params.id, 10));
    if (currentAuthor === null) {
        res.send(404);
    }
    else {
        currentAuthor.firstName = author.firstName;
        currentAuthor.lastName = author.lastName;
        res.send(author);
    }
});

// DELETE/id – usunięcie elementu kolekcji
app.delete('/authors/:id', function (req, res) {
    var author = findAuthor(parseInt(req.params.id, 10));
    if (author === null) {
        res.send(404);
    }
    else {
        removeAuthor(parseInt(req.params.id, 10));
        res.send(author);
    }
});

function removeAuthor(id) {
    var authorIndex = 0;
    for (var i = 0; i < authors.length; i++) {
        if (authors[i].id === id) {
            autorIndex = i;
        }
    }
    authors.splice(autorIndex, 1);
}

// strona główna
app.get('/authors', function (req, res) {
    res.sendFile("authors.html", { root: __dirname });
}); 

// uruchomienie
app.listen(port, function () {
    console.log("Serwer uruchomiony");
});
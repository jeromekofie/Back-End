const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


let books = [];



app.get('/books', (req, res) => {
    res.json(books);
});


app.get('/books/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).send('Book not found');
    res.json(book);
});


app.post('/books', (req, res) => {
    const { id, title, author, year } = req.body;
    if (!id || !title || !author || !year) {
        return res.status(400).send('All fields are required');
    }
    const newBook = { id: parseInt(id), title, author, year };
    books.push(newBook);
    res.status(201).json(newBook);
});


app.put('/books/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).send('Book not found');

    const { title, author, year } = req.body;
    if (!title || !author || !year) {
        return res.status(400).send('All fields are required');
    }

    book.title = title;
    book.author = author;
    book.year = year;
    res.json(book);
});


app.delete('/books/:id', (req, res) => {
    const bookIndex = books.findIndex(b => b.id === parseInt(req.params.id));
    if (bookIndex === -1) return res.status(404).send('Book not found');

    books.splice(bookIndex, 1);
    res.status(204).send();
});


app.get('/', (req, res) => {
    res.send('Welcome to the Library API');
});
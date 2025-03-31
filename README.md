# Library API

A simple api for managing books 

Install dependencies:
npm install

Run the application:
npm start


Example Requests

Add a New Book:

POST /books
{
    "id": "1",
    "title": "Node.js Essentials",
    "author": "John Doe",
    "year": 2021
}

Get All Books:

GET /books
[
    {
        "id": 1,
        "title": "Node.js Essentials",
        "author": "John Doe",
        "year": 2021
    }
]


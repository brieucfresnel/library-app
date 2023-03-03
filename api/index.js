const express = require("express")
const path = require("path")

const app = express()
const port = 4000

const books = require('./books.json')

app.get('/', (req, res) => {
	res.send('Hello world!')
})

app.get('/books', async (req, res) => {
	res.send(books);
})

app.listen(port, () => {
	console.log(`App listening on port : ${port}`)
})

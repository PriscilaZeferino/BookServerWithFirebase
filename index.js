'use strict'
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const config = require('./config')

const fs = require('firebase-admin');

fs.initializeApp({
    credential: fs.credential.cert(config.serviceAccount),
    databaseURL: config.database
});

const db = fs.firestore(); 

const listBooks = async (req, res ) => {
    try {
        let listBooks = [];
        const books = await db.collection('books').get()
        books.forEach((doc) => {
            listBooks.push(doc.data())
        });        
        res.status(200).json(listBooks)
    } catch(error) {
        res.status(400).json(error.message)
    }
}


const getBookById = async (req, res) => {
    try {
        const id = req.query.id;
        const book =  await (await db.collection('books').doc(id).get()).data()
        res.status(200).json(book)
    } catch(error) {
        res.status(400).json(error.message)
    }
}

const addBooks = async (req, res) => {
    try {
        const data = req.body;
        const bookRef =  await db.collection('books')
        const docRef = await bookRef.add(data)
        const generatedId = docRef.id;    

        const bookDataWithId = {
            id: generatedId,
            ...data
        };

        await db.collection('books').doc(generatedId).update(bookDataWithId)


        res.status(200).json("Books saved sucessfully")
    } catch(error) {
        res.status(400).json(error.message)
    }
}

const updateBooks = async (req, res ) => {
    try {
        const id = req.query.id;
        const data = req.body;

        const book =  await db.collection('books').doc(id).update(data)
        res.status(200).json("Books updated sucessfully")
    
    } catch(error) {
        res.status(400).send(error.message)
    }
}


const deleteBooks = async (req, res ) => {
    try {
        const id = req.query.id;
        const book =  await db.collection('books').doc(id).delete()
        res.status(200).json("Books deleted sucessfully")
    } catch(error) {
        res.status(400).send(error.message)
    }
}

const app = express();

app.use(express.json())
app.use(cors())
app.use(bodyParser.json())


app.get('/listBooks', listBooks)
app.get('/getBookById', getBookById)
app.post('/addBook', addBooks)
app.put('/updateBook', updateBooks)
app.delete('/deleteBook', deleteBooks)

app.listen(config.port, () => {
    console.log('App is listening on url http://localhost:' + config.port)
})
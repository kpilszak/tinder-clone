const PORT = 8000
const express = require('express')
const { MongoClient } = require('mongodb')
const uri = 'mongodb+srv://kpilszak:<db_password>@cluster0.lla0p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const app = express()

app.get('/', (req, res) => {
    res.json('Hello to my app')
})

app.get('/signup', (req, res) => {
    res.json('Hello to my app')
})

app.listen(PORT, () => console.log('Server running on PORT ' + PORT))
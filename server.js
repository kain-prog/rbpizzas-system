require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
const path = require('path');
const postRoute = require('./routes/postRoute');

const server = express();

// MongoDB

mongoose.connect(process.env.MONGO_CONNECTION_URL, (error) => {
    if(error)
    console.log(error)
    else
    console.log('Banco conectado')
});


// template EJS
server.set('view engine', 'ejs')

server.set('views', path.join(__dirname, 'views'));

// files Statics

server.use(express.static('public'))

// Routes
server.use('/', postRoute);


server.listen(PORT, () => {
    console.log('Servidor rodando na porta', PORT)
})
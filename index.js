const express = require('express');
const mongoose = require('mongoose')
const router = require('./routes')
const bodyParser = require('body-parser')
// conectar mongo
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/rest', {
    useNewUrlParser: true
});


const cors = require('cors');

const app = express();

// habilitar bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

app.use('/', router())

app.listen(4000);
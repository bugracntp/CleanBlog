const express = require('express');
const ejs = require('ejs');
const path = require('path');

const app = express();
const port = 3000;

// TAMPLATE ENGINE
app.set('view engine', 'ejs');

// MIDDLEWARES
app.use(express.static('public'));

// ROUTERS
app.get('/', (req, res) => {
   res.render('index');
});

app.get('/about', (req, res) => {
   res.render('about');
});

app.get('/post', (req, res) => {
   res.render('post');
});

app.get('/addpost', (req, res) => {
   res.render('add_post');
});

app.listen(port, () => {
   console.log(`sunucu ${port}'unda açıldı.`);
});

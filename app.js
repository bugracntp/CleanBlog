const express = require('express');
const mongoose = require('mongoose');

const ejs = require('ejs');
const path = require('path');

const Post = require('./models/posts') 

const app = express();
const port = 3000;


// DB Connection
mongoose.set("strictQuery", false);
mongoose.connect('mongodb://localhost/cleanblog-test-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


// TAMPLATE ENGINE
app.set('view engine', 'ejs');

// MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); // url de ki datayı okumaya yarıyor
app.use(express.json()); // url deki datayı json a çevirmeye yarıyor


// ROUTERS
app.get('/', async (req, res) => {
   const Posts = await Post.find({})
   res.render('index',{
      Posts
   });
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

app.get('/posts/:id', async (req, res) => {
   const Posts = await Post.findById(req.params.id)
   res.render('post',{
      Posts
   });
});

app.post('/sendpost', async (req,res)=>{
   await Post.create(req.body)
   res.redirect('/'); // adresine yönlendirioruz
})

app.listen(port, () => {
   console.log(`sunucu ${port}'unda açıldı.`);
});

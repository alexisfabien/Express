const path = require('path')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('public'));

app.get('/', (req,res) => {
    res.render('index')
})

app.get('/contact', (req,res) => {
    res.render('pages/contact')
})

app.get('/about', (req,res) => {
    res.render('pages/about')
})

app.get('/admin', (req,res) => {
    res.render('pages/admin/admin')
})

app.get('/admin/article', (req,res) => {
    res.render('pages/admin/article')
})

app.get('/admin/addArticle', (req,res) => {
    res.render('pages/admin/addArticle')
})

app.post('/admin/addArticle', (req,res) => {
    console.log('iiiiiiicccccciiiiii',req.body);
})

app.listen(8081, () => {
    console.log('serveur running on localhost 8081')
})
const express = require('express')
const path = require('path')
const morgan = require('morgan')
const {engine} = require('express-handlebars')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

app.use(morgan('combined'))

//Template engine
app.engine('hbs', engine({
  extname: '.hbs'
})) //Dinh nghia engine 
app.set('view engine', 'hbs') // Su dung engine da dinh nghia o tren
app.set('views', path.join(__dirname, 'resources/views'))
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/news', (req, res) => {
  res.render('news');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
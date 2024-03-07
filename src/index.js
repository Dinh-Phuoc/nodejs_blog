const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();
const route = require('./routes');
const db = require('./config/db');
const methodOverride = require('method-override');
const port = 3000;

db.connect();

app.use(methodOverride('_method'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());

//app.use(morgan('combined'))

//Template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
); //Dinh nghia engine
app.set('view engine', 'hbs'); // Su dung engine da dinh nghia o tren
app.set('views', path.join(__dirname, 'resources/views'));

route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

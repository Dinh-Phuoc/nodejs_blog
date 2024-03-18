const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const route = require('./routes');
const db = require('./config/db');
const methodOverride = require('method-override');


const SortMiddleware = require('./app/middleware/SortMiddleware');

const app = express();
const port = 3000;

db.connect();

app.use(methodOverride('_method'));

app.use(SortMiddleware);

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());

//HTTP loger
app.use(morgan('combined'))

//Template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
            sortable: (fieldName, sort) => {

                const sortType = fieldName === sort.collumn ? sort.type : 'default';
                const icons = {
                    default: 'bi bi-caret-left-fill',
                    asc: 'bi bi-sort-down-alt',
                    desc: 'bi bi-sort-down',
                };

                const types = {
                    default: 'asc',
                    asc: 'desc',
                    desc: 'asc',
                }

                const icon = icons[sortType];
                const type = types[sortType];

                return `<a href="?_sort&collumn=${fieldName}&type=${type}">
                            <i class="${icon}"></i>
                        </a>`;
            }
        },
    }),
); 

//Dinh nghia engine
app.set('view engine', 'hbs'); // Su dung engine da dinh nghia o tren
app.set('views', path.join(__dirname, 'resources/views'));

route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

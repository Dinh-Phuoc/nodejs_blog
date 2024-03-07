const newsRouter = require('./news');
const homeRouter = require('./home');
const mangaRouter = require('./manga');
const meRouter = require('./me');

function route(app) {
    app.use('/me', meRouter);

    app.use('/manga', mangaRouter);

    app.use('/news', newsRouter);

    app.use('/', homeRouter);
}

module.exports = route;

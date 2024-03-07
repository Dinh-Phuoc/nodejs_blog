const Manga = require('../models/Manga.js');

class HomeController {
    index(req, res, next) {
        Manga.find({})
            .lean()
            .then((manga) => res.render('home', { manga }))
            .catch(next);
    }
}

module.exports = new HomeController();

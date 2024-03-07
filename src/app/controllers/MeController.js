const Manga = require('../models/Manga.js');

class MeController {
    async storedManga(req, res, next) {
        await Manga.find({})
            .lean()
            .then((manga) => res.render('me/storedManga', { manga }))
            .catch(next);
    }
}

module.exports = new MeController();

const Manga = require('../models/Manga.js');

class NewsController {
    // [Get] /News
    async index(req, res) {
        try {
            const manga = await Manga.findOne({});
            res.json(manga);
        } catch (error) {
            res.status(500).json('Error message');
        }
    }

    show(req, res) {
        res.send('Welcome');
    }
}

module.exports = new NewsController();

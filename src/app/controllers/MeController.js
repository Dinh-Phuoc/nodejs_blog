const Manga = require('../models/Manga.js');

class MeController {
    storedManga(req, res, next) {

        let mangaQuery = Manga.find({});
        if (req.query.hasOwnProperty('_sort')) {
            mangaQuery = mangaQuery.sort({
                [req.query.collumn]: req.query.type
            })
        }

        Promise.all([
            Manga.countDocumentsWithDeleted({ deleted: true }).lean(),
            mangaQuery.lean(),
        ])
            .then(([deletedCount, findDeletedResult]) => {
                res.render('me/storedManga', {
                    deletedCount,
                    findDeletedResult,
                });
            })
            .catch(next);
    }

    async trashManga(req, res, next) {
        try {
            const manga = await Manga.findWithDeleted({ deleted: true }).lean();
            res.render('me/trashManga', { manga });
        } catch (error) {
            res.json({ error: err.message });
        }
    }
}

module.exports = new MeController();

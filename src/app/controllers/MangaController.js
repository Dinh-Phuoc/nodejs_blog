const Manga = require('../models/Manga.js');

class MangaController {
    async show(req, res, next) {
        try {
            var manga = await Manga.findOne({ slug: req.params.slug }).lean();
            res.render('manga/show', { manga });
        } catch (error) {
            res.json({ error: err.message });
        }
    }

    // [POST] / manga/hdFormAction
    hdFormAction(req, res, next) {
        switch(req.body.action) {
            case 'create':
                res.json(req.body);
                break;
            case 'delete':
                Manga.delete({ _id: { $in: req.body.mangaIDs} })
                    .lean()
                    .then(() => res.redirect('back'))
                    .catch(next);                   
                break;
            default:
                res.json({ message: 'Action is invalid' });
                break;
        }
    }
    async create(req, res, next) {
        try {
            const manga = await Manga.findOne({ slug: req.params.slug }).lean();
            res.render('manga/create', { manga });
        } catch (error) {
            res.json({ error: err.message });
        }
    }

    async edit(req, res, next) {
        try {
            const manga = await Manga.findById({ _id: req.params.id }).lean();
            res.render('manga/edit', { manga });
        } catch (error) {
            res.json({ error: err.message });
        }
    }

    // [DELETE] / manga/:id
    async destroy(req, res, next) {
        try {
            await Manga.delete({ _id: req.params.id });
            res.redirect('back');
        } catch (error) {
            res.json({ error: err.message });
        }
    }

    // [DELETE] / manga/:id/force
    async destroyForce(req, res, next) {
        try {
            await Manga.deleteOne({ _id: req.params.id });
            res.redirect('back');
        } catch (error) {
            res.json({ error: err.message });
        }
    }

    async update(req, res, next) {
        try {
            await Manga.updateOne({ _id: req.params.id }, req.body).lean();
            res.redirect('/me/stored/manga');
        } catch (error) {
            res.json({ error: err.message });
        }
    }

    // [PATCH] / manga/:id/restore
    async restore(req, res, next) {
        try {
            await Manga.restore({ _id: req.params.id }).lean();
            console.log(req.params.id);
            res.redirect('back');
        } catch (error) {
            res.json({ error: err.message });
        }
    }

    async store(req, res, next) {
        const manga = new Manga(req.body);
        await manga.save().then(() => res.redirect('back'));
    }
}

module.exports = new MangaController();

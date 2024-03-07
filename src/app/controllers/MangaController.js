const { response } = require('express');
const Manga = require('../models/Manga.js');

class MangaController {
    show(req, res, next) {
        Manga.findOne({ slug: req.params.slug })
            .lean()
            .then((manga) => res.render('manga/show', { manga }))
            .catch(next());
    }

    create(req, res, next) {
        Manga.findOne({ slug: req.params.slug })
            .lean()
            .then((manga) => res.render('manga/create', { manga }))
    }

    edit(req, res, next) {
        Manga.findById({ _id: req.params.id })
            .lean()
            .then((manga) => res.render('manga/edit', { manga }))
            .catch(next);
    }

    // [DELETE] / manga/:id
    destroy(req, res, next) {
        Manga.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'));           
    }

    update(req, res, next) {
        Manga.updateOne({ _id: req.params.id }, req.body)
            .lean()
            .then(() => res.redirect('/me/stored/manga'))
            .catch(next);
    }

    async store(req, res, next) {
        const manga = new Manga(req.body);
        await manga.save().then(() => res.redirect('back'));
    }
}

module.exports = new MangaController();

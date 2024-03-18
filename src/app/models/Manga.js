const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;

const Manga = new Schema(
    {
        name: String,
        desc: String,
        img: String,
        Genres: String,
        author: String,
        Idvideo: String,
        slug: { type: String, slug: 'name', unique: true },
    },
    { 
        timestamps: true,
    },
);

// Add plugins
mongoose.plugin(slug);

Manga.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

module.exports = mongoose.model('Manga', Manga);

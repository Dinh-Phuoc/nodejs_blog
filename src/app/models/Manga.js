const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;
mongoose.plugin(slug);

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
    { timestamps: true },
);

module.exports = mongoose.model('Manga', Manga);

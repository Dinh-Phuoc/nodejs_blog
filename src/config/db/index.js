const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1/mangas');
        console.log('connection established');
    } catch (error) {
        console.log('connection failed: ' + error);
    }
}

module.exports = { connect };

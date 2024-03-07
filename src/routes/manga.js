const express = require('express');
const router = express.Router();

const mangaController = require('../app/controllers/MangaController.js');

router.get('/create', mangaController.create);
router.post('/store', mangaController.store);
router.get('/:id/edit', mangaController.edit);
router.delete('/:id', mangaController.destroy);
router.put('/:id', mangaController.update);
router.get('/:slug', mangaController.show);

module.exports = router;

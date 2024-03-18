const express = require('express');
const router = express.Router();

const mangaController = require('../app/controllers/MangaController.js');

router.get('/create', mangaController.create);
router.post('/store', mangaController.store);
router.get('/:id/edit', mangaController.edit);
router.post('/hdFormAction', mangaController.hdFormAction);
router.delete('/:id', mangaController.destroy);
router.delete('/:id/force', mangaController.destroyForce);
router.patch('/:id/restore', mangaController.restore);
router.put('/:id', mangaController.update);
router.get('/:slug', mangaController.show);

module.exports = router;

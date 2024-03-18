const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

router.use('/stored/manga', meController.storedManga);
router.use('/trash/manga', meController.trashManga);

module.exports = router;

const express = require('express');
const router = express.Router();
const controller = require('../controller/livro-controller');

router.get('/', controller.getAllLivro);
router.post('/', controller.addLivro);
router.put('/', controller.editLivro);
router.delete('/', controller.deleteLivro);

module.exports = router;
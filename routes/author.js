const express = require('express');
const router = express.Router();
const authorController = require('../controllers/author');

// Route to get articles by author ID
router.get('/:id', authorController.getArticlesById);

module.exports = router;


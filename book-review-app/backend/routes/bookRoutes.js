const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const reviewController = require('../controllers/reviewController');

// Book routes
router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getBook);
router.post('/', bookController.createBook);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

// Review routes
router.get('/:bookId/reviews', reviewController.getBookReviews);
router.post('/:bookId/reviews', reviewController.createReview);
router.put('/:bookId/reviews/:id', reviewController.updateReview);
router.delete('/:bookId/reviews/:id', reviewController.deleteReview);

module.exports = router; 
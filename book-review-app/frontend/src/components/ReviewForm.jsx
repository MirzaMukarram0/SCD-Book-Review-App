import React, { useState } from 'react';
import '../styles/ReviewForm.css';

const ReviewForm = ({ bookId, onSubmit }) => {
  const [reviewerName, setReviewerName] = useState('');
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ bookId, reviewerName, rating, comment });
    setReviewerName('');
    setRating(1);
    setComment('');
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="reviewerName">Your Name</label>
        <input
          type="text"
          id="reviewerName"
          value={reviewerName}
          onChange={(e) => setReviewerName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="rating">Rating</label>
        <select
          id="rating"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
        >
          {[1, 2, 3, 4, 5].map(num => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="comment">Your Review</label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="submit-button">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
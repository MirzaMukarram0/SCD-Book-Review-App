import React from 'react';
import '../styles/ReviewList.css';

const ReviewList = ({ reviews }) => {
  return (
    <div className="review-list">
      {reviews.map(review => (
        <div key={review._id} className="review-item">
          <div className="review-header">
            <span className="reviewer-name">{review.reviewerName}</span>
            <span className="rating">{review.rating}/5</span>
          </div>
          <p className="review-comment">{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
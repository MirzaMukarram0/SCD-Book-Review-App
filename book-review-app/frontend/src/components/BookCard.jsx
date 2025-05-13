import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../utils/api';
import '../styles/BookCard.css';

const BookCard = ({ book, onDelete }) => {
  const navigate = useNavigate();
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState('');

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this book?')) {
      return;
    }

    setIsDeleting(true);
    setError('');

    try {
      await api.delete(`/books/${book._id}`);
      if (onDelete) {
        onDelete(book._id);
      }
    } catch (error) {
      setError('Failed to delete book');
      setIsDeleting(false);
    }
  };

  return (
    <div className="book-card">
      {error && <div className="error-message">{error}</div>}
      <img src={book.coverImageURL} alt={book.title} />
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <div className="book-actions">
        <Link to={`/books/${book._id}`} className="view-button">View Details</Link>
        <Link to={`/books/${book._id}/edit`} className="edit-button">Edit</Link>
        <button 
          onClick={handleDelete} 
          className="delete-button"
          disabled={isDeleting}
        >
          {isDeleting ? 'Deleting...' : 'Delete'}
        </button>
      </div>
    </div>
  );
};

export default BookCard;
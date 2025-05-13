import React, { useState, useEffect } from 'react';
import BookCard from '../components/BookCard';
import api from '../utils/api';
import '../styles/BookListPage.css';

const BookListPage = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await api.get('/books');
        setBooks(response.data);
      } catch (error) {
        setError('Failed to fetch books. Please try again later.');
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="book-list-container">
      <div className="book-list-header">
        <h1>Discover Books</h1>
        <p>Explore our collection of books and find your next favorite read</p>
      </div>

      {error && <div className="error-message">{error}</div>}

      <div className="book-grid">
        {books.map(book => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookListPage;
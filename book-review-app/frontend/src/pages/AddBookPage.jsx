import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';
import '../styles/AddBookPage.css';

const AddBookPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    coverImageURL: '',
    genre: '',
    publishedYear: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/books', formData);
      navigate('/books');
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div className="add-book-container">
      <div className="add-book-header">
        <h1>Add New Book</h1>
        <p>Share your favorite books with the community</p>
      </div>

      {error && <div className="error-message">{error}</div>}

      <form className="add-book-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="title">Book Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="Enter book title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              id="author"
              name="author"
              value={formData.author}
              onChange={handleChange}
              required
              placeholder="Enter author name"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="genre">Genre</label>
            <input
              type="text"
              id="genre"
              name="genre"
              value={formData.genre}
              onChange={handleChange}
              required
              placeholder="Enter book genre"
            />
          </div>

          <div className="form-group">
            <label htmlFor="publishedYear">Published Year</label>
            <input
              type="number"
              id="publishedYear"
              name="publishedYear"
              value={formData.publishedYear}
              onChange={handleChange}
              required
              placeholder="Enter published year"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="coverImageURL">Cover Image URL</label>
          <input
            type="url"
            id="coverImageURL"
            name="coverImageURL"
            value={formData.coverImageURL}
            onChange={handleChange}
            required
            placeholder="Enter cover image URL"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            placeholder="Enter book description"
          />
        </div>

        <button type="submit" className="submit-button">Add Book</button>
      </form>
    </div>
  );
};

export default AddBookPage;
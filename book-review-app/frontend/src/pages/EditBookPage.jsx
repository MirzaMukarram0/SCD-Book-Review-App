import React, { useEffect, useState } from 'react';
     import { useParams, useNavigate } from 'react-router-dom';
     import api from '../utils/api';
     const EditBookPage = () => {
       const { id } = useParams();
       const [title, setTitle] = useState('');
       const [author, setAuthor] = useState('');
       const [description, setDescription] = useState('');
       const [coverImageURL, setCoverImageURL] = useState('');
       const [publishedDate, setPublishedDate] = useState('');
       const navigate = useNavigate();
       useEffect(() => {
         const fetchBook = async () => {
           try {
             const response = await api.get(`/books/${id}`);
             const book = response.data;
             setTitle(book.title);
             setAuthor(book.author);
             setDescription(book.description);
             setCoverImageURL(book.coverImageURL);
             setPublishedDate(book.publishedDate);
           } catch (error) {
             console.error(error);
           }
         };
         fetchBook();
       }, [id]);
       const handleSubmit = async (e) => {
         e.preventDefault();
         try {
           await api.put(`/books/${id}`, { title, author, description, coverImageURL, publishedDate });
           navigate(`/books/${id}`);
         } catch (error) {
           console.error(error);
         }
       };
       return (
         <form onSubmit={handleSubmit}>
           <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
           <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" required />
           <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
           <input type="text" value={coverImageURL} onChange={(e) => setCoverImageURL(e.target.value)} placeholder="Cover Image URL" required />
           <input type="date" value={publishedDate} onChange={(e) => setPublishedDate(e.target.value)} required />
           <button type="submit">Update Book</button>
         </form>
       );
     };
     export default EditBookPage;
import React, { useEffect, useState } from 'react';
     import BookCard from '../components/BookCard';
     import api from '../utils/api';
     const HomePage = () => {
       const [books, setBooks] = useState([]);
       useEffect(() => {
         const fetchBooks = async () => {
           try {
             const response = await api.get('/books');
             setBooks(response.data.slice(0, 5));
           } catch (error) {
             console.error(error);
           }
         };
         fetchBooks();
       }, []);
       return (
         <div>
           <h1>Latest Books</h1>
           {books.map(book => <BookCard key={book._id} book={book} />)}
         </div>
       );
     };
     export default HomePage;
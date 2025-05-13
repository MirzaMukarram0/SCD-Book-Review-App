import React, { useEffect, useState } from 'react';
     import { useParams } from 'react-router-dom';
     import ReviewList from '../components/ReviewList';
     import ReviewForm from '../components/ReviewForm';
     import api from '../utils/api';
     const BookDetailPage = () => {
       const { id } = useParams();
       const [book, setBook] = useState(null);
       const [reviews, setReviews] = useState([]);
       useEffect(() => {
         const fetchBook = async () => {
           try {
             const response = await api.get(`/books/${id}`);
             setBook(response.data);
           } catch (error) {
             console.error(error);
           }
         };
         const fetchReviews = async () => {
           try {
             const response = await api.get(`/books/${id}/reviews`);
             setReviews(response.data);
           } catch (error) {
             console.error(error);
           }
         };
         fetchBook();
         fetchReviews();
       }, [id]);
       const handleReviewSubmit = async (review) => {
         try {
           const response = await api.post(`/books/${id}/reviews`, review);
           setReviews([...reviews, response.data]);
         } catch (error) {
           console.error(error);
         }
       };
       if (!book) return <div>Loading...</div>;
       return (
         <div>
           <h1>{book.title}</h1>
           <p>{book.author}</p>
           <p>{book.description}</p>
           <img src={book.coverImageURL} alt={book.title} />
           <h2>Reviews</h2>
           <ReviewList reviews={reviews} />
           <h2>Add a Review</h2>
           <ReviewForm bookId={id} onSubmit={handleReviewSubmit} />
         </div>
       );
     };
     export default BookDetailPage;
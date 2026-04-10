// src/App.js
import React from 'react';
 
 

// Example ProductReviews component
const ProductReviews = ({ reviews }) => {
  if (!reviews || reviews.length === 0) {
    return <p>No reviews yet. Be the first to leave a review!</p>;
  }

  const averageRating = (
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
  ).toFixed(1);

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '5px' }}>
      <h2>Product Reviews</h2>
      <p><strong>Average Rating:</strong> {averageRating} / 5</p>
      
      {reviews.map((review) => (
        <div key={review.id} style={{ marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
          <div>
            <strong>{review.username}</strong> <span>({new Date(review.date).toLocaleDateString()})</span>
          </div>
          <div>
            <strong>Rating:</strong> {review.rating} / 5
          </div>
          <div>
            <p>{review.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

 // Example review data
const reviewData = [
  { id: 1, username: 'JaneDoe', rating: 4, comment: 'Great product! Really satisfied with the quality.', date: '2024-08-22T12:00:00Z' },
  { id: 2, username: 'JohnSmith', rating: 5, comment: 'Exceeded my expectations. Will definitely buy again.', date: '2024-08-23T15:30:00Z' },
  { id: 3, username: 'AliceWonder', rating: 3, comment: 'It’s okay, but there were some issues with the shipping.', date: '2024-08-24T09:45:00Z' },
];

const ProductReviewsContainer = () => {
  return (
    <div style={{ padding: '20px' }}>
      <ProductReviews reviews={reviewData} />
    </div>
  );
};

export default ProductReviewsContainer;

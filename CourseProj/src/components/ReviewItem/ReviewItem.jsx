export const ReviewItem = ({ review }) => {
  return (
    <div className="review-item">
      <div className="review-header">
        <span className="user">{review.user}</span>
        <span className="rating">{'★'.repeat(review.rating)}</span>
      </div>
      <p className="review-text">{review.text}</p>
    </div>
  );
}


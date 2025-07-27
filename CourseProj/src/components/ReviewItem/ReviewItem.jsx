import styles from './ReviewItem.module.css';
import classNames from 'classnames';

export const ReviewItem = ({ review }) => {
  return (
    <div className={classNames(styles.reviewItem)}>
      <div className={classNames(styles.reviewHeader)}>
        <span className={classNames(styles.user)}>{review.user}</span>
        <span className={classNames(styles.rating)}>{'★'.repeat(review.rating)}</span>
      </div>
      <p className={classNames(styles.reviewText)}>{review.text}</p>
    </div>
  );
}
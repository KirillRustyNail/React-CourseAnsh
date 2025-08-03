import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";
import { ReviewItem } from "../../components/ReviewItem/ReviewItem";
import { ReviewForm } from "../../components/ReviewForm/ReviewForm";
import { useUser } from "../../components/UserContextProvider/useUser"
import styles from "./ReviewsPage.module.css";

export const  ReviewsPage = () => {
  const { restaurantId } = useParams();
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );
  const { userName } = useUser();

  if (!restaurant) return null;

  const reviewIds = restaurant.reviews || [];

  return (
    <section className={styles.reviewsSection}>
      <h3>Reviews</h3>
      {reviewIds.length ? (
        <div className={styles.reviews}>
          {reviewIds.map((reviewId) => (
            <ReviewItem key={reviewId} reviewId={reviewId} />
          ))}
        </div>
      ) : (
        <p>No reviews yet</p>
      )}

      {userName && (
        <div className={styles.reviewFormAdd}>
          <ReviewForm restaurantId={restaurant.id} />
        </div>
      )}
    </section>
  );
}

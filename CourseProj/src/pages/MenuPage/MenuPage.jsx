import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";
import { MenuItem } from "../../components/MenuItem/MenuItem";
import styles from "./MenuPage.module.css";

export const  MenuPage = () => {
  const { restaurantId } = useParams();
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );
  if (!restaurant) return null;

  const dishIds = restaurant.menu || [];

  return (
    <section className={styles.menuSection}>
      <h3>Menu</h3>
      {dishIds.length ? (
        <div className={styles.menuItems}>
          {dishIds.map((dishId) => (
            <MenuItem key={dishId} id={dishId} />
          ))}
        </div>
      ) : (
        <p>No menu items available</p>
      )}
    </section>
  );
}

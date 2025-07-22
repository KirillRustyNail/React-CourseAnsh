import styles from './RestaurantTabs.module.css';
import classNames from 'classnames';

export const RestaurantTabs = ({ restaurants, activeId, onTabClick }) => {
  return (
    <div className={styles.restaurantTabs}>
      {restaurants.map(restaurant => (
        <button
          key={restaurant.id}
          className={classNames(styles.tab, {
            [styles.active]: restaurant.id === activeId
          })}
          onClick={() => restaurant.id !== activeId && onTabClick(restaurant.id)}
          disabled={restaurant.id === activeId}
        >
          {restaurant.name}
        </button>
      ))}
    </div>
  );
};

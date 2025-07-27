import styles from './RestaurantTabs.module.css';
import classNames from 'classnames';
import { useTheme } from '../ThemeContextProvider/useTheme';

export const RestaurantTabs = ({ restaurants, activeId, onTabClick }) => {
  const { theme } = useTheme();

  return (
    <div
      className={classNames(styles.restaurantTabs, {
        [styles.dark]: theme === 'dark',
      })}
    >
      {restaurants.map((restaurant) => (
        <button
          key={restaurant.id}
          className={classNames(styles.tab, {
            [styles.active]: restaurant.id === activeId,
            [styles.dark]: theme === 'dark',
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

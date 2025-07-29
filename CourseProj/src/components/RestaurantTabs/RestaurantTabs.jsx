import styles from './RestaurantTabs.module.css';
import classNames from 'classnames';
import { useTheme } from '../ThemeContextProvider/useTheme';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/slice';

export const RestaurantTabs = ({ restaurantIds, activeId, onTabClick }) => {
  const { theme } = useTheme();

  return (
    <div
      className={classNames(styles.restaurantTabs, {
        [styles.dark]: theme === 'dark',
      })}
    >
      {restaurantIds.map((id) => {
        const restaurant = useSelector((state) => selectRestaurantById(state, id));
        
        if (!restaurant) return null; 

        return (
          <button
            key={id}
            className={classNames(styles.tab, {
              [styles.active]: id === activeId,
              [styles.dark]: theme === 'dark',
            })}
            onClick={() => id !== activeId && onTabClick(id)}
            disabled={id === activeId}
          >
            {restaurant.name}
          </button>
        );
      })}
    </div>
  );
};

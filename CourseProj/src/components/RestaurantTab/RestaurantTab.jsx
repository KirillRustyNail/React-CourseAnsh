import classNames from 'classnames';
import { useTheme } from '../ThemeContextProvider/useTheme';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/entities/restaurants/slice';
import styles from './RestaurantTab.module.css';

export const RestaurantTab = ({ id, activeId, onTabClick }) => {
  const { theme } = useTheme();
  const restaurant = useSelector((state) => selectRestaurantById(state, id));
  if (!restaurant) return null;

  return (
    <button
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
};
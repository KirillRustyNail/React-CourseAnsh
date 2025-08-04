import styles from './RestaurantTabs.module.css';
import classNames from 'classnames';
import { useTheme } from '../ThemeContextProvider/useTheme';
import { RestaurantTab } from '../RestaurantTab/RestaurantTab';

export const RestaurantTabs = ({ restaurantIds }) => {
  const { theme } = useTheme();

  return (
    <div
      className={classNames(styles.restaurantTabs, {
        [styles.dark]: theme === 'dark',
      })}
    >
      {restaurantIds.map((id) => (
        <RestaurantTab key={id} id={id} />
      ))}
    </div>
  );
};

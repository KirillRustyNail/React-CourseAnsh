import classNames from 'classnames';
import { useTheme } from '../ThemeContextProvider/useTheme';
import styles from './RestaurantTabs.module.css';
import { RestaurantTab } from '../RestaurantTab/RestaurantTab';

export const RestaurantTabs = ({ restaurantIds, activeId, onTabClick }) => {
  const { theme } = useTheme();

  return (
    <div
      className={classNames(styles.restaurantTabs, {
        [styles.dark]: theme === 'dark',
      })}
    >
      {restaurantIds.map((id) => (
        <RestaurantTab
          key={id}
          id={id}
          activeId={activeId}
          onTabClick={onTabClick}
        />
      ))}
    </div>
  );
};
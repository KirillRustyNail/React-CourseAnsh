import styles from './MenuItem.module.css';
import classNames from 'classnames';
import { Ingredients } from '../Ingredients/Ingredients';
import { DishCounter } from '../Counter/DishCounter';
import { FOOD_EMOJIS } from '../../constants/foodIcons';

export const MenuItem = ({ item }) => {
  const emojiIndex = Math.abs(
    item.id.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0)
  ) % FOOD_EMOJIS.length;
  const foodEmoji = FOOD_EMOJIS[emojiIndex];

  return (
    <div className={classNames(styles.menuItem)}>
      <div className={classNames(styles.itemEmoji)}>{foodEmoji}</div>
      <div className={classNames(styles.itemInfo)}>
        <h4>{item.name}</h4>
        <p>Price: ${item.price}</p>
        <Ingredients items={item.ingredients} />
      </div>
      <DishCounter initialCount={0} min={0} max={5} />
    </div>
  );
};

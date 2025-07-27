import React from 'react';
import styles from './Ingredients.module.css';
import classNames from 'classnames';
import { INGREDIENT_ICONS } from '../../constants/IngredientsIcons';
import { useTheme } from '../ThemeContextProvider/useTheme';

export const Ingredients = ({ items }) => {
  const { theme } = useTheme();

  if (!items || items.length === 0) {
    return <p>No ingredients specified</p>;
  }

  return (
    <div
      className={classNames(styles.ingredients, {
        [styles.light]: theme === 'light',
        [styles.dark]: theme === 'dark',
      })}
    >
      <span className={styles.ingredientsLabel}>Ingredients: </span>
      <div className={styles.ingredientsList}>
        {items.map((ingredient, index) => (
          <span key={index} className={styles.ingredientItem}>
            {INGREDIENT_ICONS[ingredient] || '🍴'} {ingredient}
            {index < items.length - 1 && ', '}
          </span>
        ))}
      </div>
    </div>
  );
};

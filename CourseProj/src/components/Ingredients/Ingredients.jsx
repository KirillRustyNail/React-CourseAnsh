import React from 'react';
import styles from './Ingredients.module.css';
import classNames from 'classnames';
import { INGREDIENT_ICONS } from '../../constants/IngredientsIcons';

export const Ingredients = ({ items }) => {
  if (!items || items.length === 0) {
    return <p>No ingredients specified</p>;
  }

  return (
    <div className={styles.ingredients}>
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

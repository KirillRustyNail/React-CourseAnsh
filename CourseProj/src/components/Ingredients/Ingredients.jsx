import { INGREDIENT_ICONS } from '../../constants/IngredientsIcons';

export const Ingredients = ({ items }) => {
  if (!items || items.length === 0) {
    return <p>No ingredients specified</p>;
  }

  return (
    <div className="ingredients">
      <span className="ingredients-label">Ingredients: </span>
      <div className="ingredients-list">
        {items.map((ingredient, index) => (
          <span key={index} className="ingredient-item">
            {INGREDIENT_ICONS[ingredient] || '🍴'} {ingredient}
            {index < items.length - 1 && ', '}
          </span>
        ))}
      </div>
    </div>
  );
}
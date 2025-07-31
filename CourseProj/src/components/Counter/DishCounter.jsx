import { Counter } from './Counter';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/entities/cart/slice';

export const DishCounter = ({ dishId, min = 0, max = 5 }) => {
  const dispatch = useDispatch();
  
  const countInCart = useSelector(state => state.cart[dishId] || 0);

  const handleIncrement = () => {
    if (countInCart < max) {
      dispatch(addToCart(dishId));
    }
  };

  const handleDecrement = () => {
    if (countInCart > min) {
      dispatch(removeFromCart(dishId));
    }
  };

  return (
    <Counter
      value={countInCart}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      min={min}
      max={max}
    />
  );
};

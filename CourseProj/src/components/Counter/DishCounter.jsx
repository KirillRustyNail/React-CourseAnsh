import React, { useState, useEffect } from 'react';
import { Counter } from './Counter';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/entities/cart/slice';

export const DishCounter = ({ dishId, min = 0, max = 5 }) => {
  const dispatch = useDispatch();
  
  const countInCart = useSelector(state => state.cart[dishId] || 0);

  const [count, setCount] = useState(countInCart);

  useEffect(() => {
    setCount(countInCart); 
  }, [countInCart]);

  const handleIncrement = () => {
    if (count < max) {
      dispatch(addToCart(dishId));
    }
  };

  const handleDecrement = () => {
    if (count > min) {
      dispatch(removeFromCart(dishId));
    }
  };

  return (
    <Counter
      value={count}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      min={min}
      max={max}
    />
  );
};

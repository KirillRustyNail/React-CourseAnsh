import React, { useState } from 'react';
import { Counter } from './Counter'; 


export const DishCounter = ({ initialCount = 1 , min=0 , max=5}) => {
  const [count, setCount] = useState(initialCount); 
  
  const handleIncrement = () => {
    setCount(prev => Math.min(prev + 1, max));
  };

  const handleDecrement = () => {
    setCount(prev => Math.max(prev - 1, min));
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
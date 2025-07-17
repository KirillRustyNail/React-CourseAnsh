import { useState } from 'react';

export const Counter = ({ initial = 0, min = 0, max = 5 }) => {
  const [count, setCount] = useState(initial);

  const increment = () => setCount(prev => Math.min(prev + 1, max));
  const decrement = () => setCount(prev => Math.max(prev - 1, min));

  return (
    <div className="counter">
      <button 
        onClick={decrement} 
        disabled={count === min}
        aria-label="Decrease"
      >
        -
      </button>
      <span className="counter-value">{count}</span>
      <button 
        onClick={increment} 
        disabled={count === max}
        aria-label="Increase"
      >
        +
      </button>
    </div>
  );
}

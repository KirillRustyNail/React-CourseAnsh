import React from 'react';

export const Counter = ({ value, onIncrement, onDecrement, min, max }) => {
  return (
    <div className="counter">
      <button 
        onClick={onDecrement} 
        disabled={value === min}
        aria-label="Decrease"
      >
        -
      </button>

      <span className="counter-value">{value}</span>

      <button 
        onClick={onIncrement} 
        disabled={value === max}
        aria-label="Increase"
      >
        +
      </button>
    </div>
  );
};
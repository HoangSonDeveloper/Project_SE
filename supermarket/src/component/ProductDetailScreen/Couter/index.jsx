import React from "react";

const Counter = ({ onIncrement, onDecrement, quantity }) => {
  return (
    <div className="counter">
      <button className="counter-btn" onClick={onIncrement}>
        +
      </button>
      <span className="counter-number">{quantity}</span>
      <button
        className="counter-btn"
        onClick={onDecrement}
        disabled={quantity <= 0}
      >
        -
      </button>
    </div>
  );
};

export default Counter;

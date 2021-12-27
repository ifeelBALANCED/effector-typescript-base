import React from 'react';
import { useStore } from 'effector-react';
import { $counter, decrement, increment } from '@features/counter/model';
import './Counter.css';

export const Counter: React.FC<{ className: string }> = ({ className }) => {
  const counter = useStore($counter);
  const counterClasses = className ? `counter ${className}` : 'counter';

  return (
    <div className={counterClasses}>
      <button
        type="button"
        className="counter__button"
        aria-label="Increment value"
        onClick={increment}
      >
        +
      </button>
      <span className="counter__label">{counter}</span>
      <button
        className="counter__button"
        aria-label="Decrement value"
        onClick={decrement}
        type="button"
      >
        -
      </button>
    </div>
  );
};

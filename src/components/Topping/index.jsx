import React, { useState } from 'react';
import Check from '../Check';
import './style.css';

const Topping = ({ topping, onSelected }) => {
  return (
    <div className="topping">
      <Check checked={topping.selected} onChange={onSelected} />
      <span className="topping__content">
        {topping.name}: {topping.price} €
      </span>
    </div>
  );
};

export default Topping;

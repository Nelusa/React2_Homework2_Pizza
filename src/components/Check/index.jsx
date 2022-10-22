import React, { useState } from 'react';
import { usePrefs } from '../../preferences-context';
import './style.css';

const Check = ({ checked, onChange, topping }) => {
  const { veganOnly } = usePrefs();

  const handleClick = () => {
    onChange(!checked);
  };

  return (
    <button
      className={`${
        !topping.vegan && veganOnly ? 'check check--disabled' : 'check'
      }`}
      disabled={veganOnly && !topping.vegan}
      onClick={handleClick}
    >
      {checked ? '✓' : ''}
    </button>
  );
};

export default Check;

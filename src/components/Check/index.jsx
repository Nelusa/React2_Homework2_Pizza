import React, { useState } from 'react';
import './style.css';

const Check = ({ checked, onChange }) => {
  const handleClick = () => {
    onChange(!checked);
  };

  return (
    <button className="check" onClick={handleClick}>
      {checked ? '✓' : ''}
    </button>
  );
};

export default Check;

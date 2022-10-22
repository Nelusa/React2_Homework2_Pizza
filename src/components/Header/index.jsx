import React from 'react';
import { usePrefs } from '../../preferences-context';
import './style.css';

const Header = () => {
  const { setVeganOnly, veganOnly } = usePrefs();

  const handleSelectVegan = () => {
    setVeganOnly(!veganOnly);
    // console.log(veganOnly);
  };

  return (
    <header>
      <div className="pizza" />
      <h1>Build your own pizza</h1>

      <select onChange={handleSelectVegan}>
        <option>Vegan only</option>
        <option>All ingredients</option>
      </select>
    </header>
  );
};

export default Header;

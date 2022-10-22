import React, { useState } from 'react';
import Topping from '../Topping';
import './style.css';
import { toppings } from '../..';

const ToppingsSelect = () => {
  const [pizzaToppings, setPizzaToppings] = useState(toppings);

  const handleCheckedChange = (index, newValue) => {
    const newPizzaToppings = [...pizzaToppings];
    newPizzaToppings[index].selected = newValue;
    setPizzaToppings(newPizzaToppings);
  };

  let toppingsCount = 0;
  pizzaToppings.forEach((topping) => (toppingsCount += topping.selected));

  let toppingsPriceCount = 0;
  pizzaToppings.forEach(
    (topping) => topping.selected && (toppingsPriceCount += topping.price),
  );

  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>
        Selected toppings: {toppingsCount}, total price:{' '}
        {Math.round(toppingsPriceCount * 100) / 100} Euro
      </p>

      <div className="toppings">
        {toppings.map((topping, index) => (
          <Topping
            topping={topping}
            key={topping.name}
            onSelected={(newValue) => handleCheckedChange(index, newValue)}
          />
        ))}
      </div>
    </>
  );
};

export default ToppingsSelect;

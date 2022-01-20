import React, { useState, useEffect } from "react";
import Pizza from "./Pizza";

function PizzaList({ pizzas, handlePizzaSelect }) {
  // const [pizzas, setPizzas] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3001/pizzas")
  //     .then((r) => r.json())
  //     .then((receivedPizzas) => setPizzas(receivedPizzas));
  // }, []);

  const pizzaComponents = pizzas.map((pizza) => {
    return (
      <Pizza
        key={pizza.id}
        id={pizza.id}
        topping={pizza.topping}
        size={pizza.size}
        vegetarian={pizza.vegetarian}
        handlePizzaSelect={handlePizzaSelect}
      />
    );
  });

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>{pizzaComponents}</tbody>
    </table>
  );
}

export default PizzaList;

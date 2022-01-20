import React, { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [selectedPizza, setSelectedPizza] = useState({
    size: "Small",
    topping: "",
    vegetarian: true,
  });
  console.log(selectedPizza);

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
      .then((r) => r.json())
      .then((receivedPizzas) => setPizzas(receivedPizzas));
  }, []);

  function handlePizzaSelect(pizza) {
    setSelectedPizza(pizza);
  }

  function handlePizzaUpdate(e) {
    const name = e.target.name;
    let value = e.target.value;

    if (value === "true") {
      value = true;
    } else if (value === "false") {
      value = false;
    }
    console.log(value);

    setSelectedPizza({
      ...selectedPizza,
      [name]: value,
    });
  }

  function handlePizzaSubmit() {
    fetch(`http://localhost:3001/pizzas/${selectedPizza.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(selectedPizza),
    })
      .then((r) => r.json())
      .then((updatedPizza) => {
        const updatedList = pizzas.map((pizza) => {
          if (pizza.id === updatedPizza.id) {
            return updatedPizza;
          }
          return pizza;
        });
        setPizzas(updatedList);
        setSelectedPizza({
          size: "Small",
          topping: "",
          vegetarian: true,
        });
      });
  }

  return (
    <>
      <Header />
      <PizzaForm
        size={selectedPizza.size}
        topping={selectedPizza.topping}
        vegetarian={selectedPizza.vegetarian}
        handlePizzaUpdate={handlePizzaUpdate}
        onSubmitPizza={handlePizzaSubmit}
      />
      <PizzaList pizzas={pizzas} handlePizzaSelect={handlePizzaSelect} />
    </>
  );
}

export default App;

import React, { useState } from "react";

function PizzaForm({
  size,
  topping,
  vegetarian,
  handlePizzaUpdate,
  onSubmitPizza,
}) {
  // console.log(selectedPizza);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmitPizza();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            value={topping}
            onChange={handlePizzaUpdate}
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
          />
        </div>
        <div className="col">
          <select
            value={size}
            onChange={handlePizzaUpdate}
            className="form-control"
            name="size"
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              checked={vegetarian ? true : false}
              onChange={handlePizzaUpdate}
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value={true}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              checked={vegetarian ? false : true}
              onChange={handlePizzaUpdate}
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value={false}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;

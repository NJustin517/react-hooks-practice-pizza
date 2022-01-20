import React from "react";

function Pizza({ id, topping, size, vegetarian, handlePizzaSelect }) {
  function handleEditClick() {
    const newObj = {
      id,
      topping,
      size,
      vegetarian,
    };
    handlePizzaSelect(newObj);
  }

  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "Yes" : "No"}</td>
      <td>
        <button
          onClick={handleEditClick}
          type="button"
          className="btn btn-primary"
        >
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;

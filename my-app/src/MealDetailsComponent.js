import React from "react";

// MealDetailsComponent - <h3>, <p>, <a>
function MealDetailsComponent(props) {
  return (
    <li>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

export default MealDetailsComponent;

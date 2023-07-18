import React from "react";
import MealDetailsComponent from "./MealDetailsComponent";

// MealsListContainer - contains MealDetailsComponent
const MealsListContainer = () => {
  return (
    <>
      <h2>Latest Meals</h2>
      <ul>
        <MealDetailsComponent
          title="Recipe 1"
          description="Meal description 1"
        />
        <MealDetailsComponent
          title="Recipe 2"
          description="Meal description 2"
        />
        <MealDetailsComponent
          title="Recipe 3"
          description="Meal description 3"
        />
      </ul>
    </>
  );
};

export default MealsListContainer;

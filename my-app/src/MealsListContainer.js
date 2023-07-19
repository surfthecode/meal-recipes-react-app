import React from "react";
import MealDetailsComponent from "./MealDetailsComponent";

// MealsListContainer - contains MealDetailsComponent
const MealsListContainer = () => {
  return (
    <>
      <h2>Latest Meals</h2>
      <div>
        <MealDetailsComponent
          imageSRC="https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg"
          title="Spicy Arrabiata Penne"
          area="Italian"
          category="Vegetarian"
        />
      </div>
    </>
  );
};

export default MealsListContainer;

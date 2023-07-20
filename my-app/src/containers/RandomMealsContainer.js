import React from "react";
import MealQuickInfoComponent from "../components/MealQuickInfoComponent";
import mockData from "../mock";

const RandomMealsContainer = () => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {mockData.meals.map((meal) => (
        <MealQuickInfoComponent
          key={meal.idMeal}
          title={meal.strMeal}
          description={meal.strCategory}
        />
      ))}
    </div>
  );
};

export default RandomMealsContainer;

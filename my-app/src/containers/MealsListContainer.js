import React from "react";
import MealDetailsComponent from "../components/MealDetailsComponent";
import TitleComponent from "../components/TitleComponent";
import mockData from "../mock";

// MealsListContainer - contains MealDetailsComponent
const style = {
  row: {
    display: "flex",
    flexWrap: "wrap",
    marginLeft: "-15px",
    marginRight: "-15px",
  },

  // col: {
  //   flex: "0 0 33.33%",
  //   maxWidth: "33.33%",
  // },
};

const MealsListContainer = () => {
  return (
    <>
      <div style={{ width: "100%" }}>
        <TitleComponent text="Latest Meals" />

        <div style={style.row}>
          {mockData.meals.map((meal) => (
            <div style={style.col}>
              <MealDetailsComponent
                key={meal.idMeal}
                imageSRC={meal.strMealThumb}
                title={meal.strMeal}
                area={meal.strArea}
                category={meal.strCategory}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MealsListContainer;

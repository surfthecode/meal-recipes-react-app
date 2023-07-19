import React from "react";
import MealDetailsComponent from "../components/MealDetailsComponent";
import TitleComponent from "../components/TitleComponent";

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
          <div style={style.col}>
            <MealDetailsComponent
              imageSRC="https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg"
              title="Spicy Arrabiata Penne"
              area="Italian"
              category="Vegetarian"
            />
          </div>

          <div style={style.col}>
            <MealDetailsComponent
              imageSRC="https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg"
              title="Chicken Handi"
              area="Indian"
              category="Chicken"
            />
          </div>

          <div style={style.col}>
            <MealDetailsComponent
              imageSRC="https://www.themealdb.com/images/media/meals/1550440197.jpg"
              title="Salmon Eggs Eggs Benedict"
              area="American"
              category="Breakfast"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MealsListContainer;

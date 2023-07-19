import React from "react";
import MealsListContainer from "../containers/MealsListContainer.js";
import RandomMealsContainer from "../containers/RandomMealsContainer.js";
import SideContainer from "../containers/SideContainer.js";

const Homepage = () => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <SideContainer />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <RandomMealsContainer />
          <MealsListContainer />
        </div>
      </div>
    </>
  );
};

export default Homepage;

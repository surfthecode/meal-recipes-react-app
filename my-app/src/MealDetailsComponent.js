import React from "react";

// MealDetailsComponent - <h3>, <p>, <a>
function MealDetailsComponent(props) {
  return (
    <>
      <div style={{}}>
        <img
          src={props.imageSRC}
          alt={props.title}
          width={150}
          style={{ borderRadius: "50%" }}
        ></img>
      </div>
      <div
        style={{
          backgroundColor: "blanchedalmond",
          borderRadius: "10px",
          padding: "10px 5px",
        }}
      >
        <h3 style={{ fontSize: "22px", color: "green" }}>{props.title}</h3>
        <p style={{ color: "grey" }}>
          <span style={{ color: "black", fontSize: "12px" }}>Area: </span>
          {props.area}
        </p>
        <p style={{ color: "grey" }}>
          <span style={{ color: "black", fontSize: "12px" }}>Category: </span>
          {props.category}
        </p>
      </div>
    </>
  );
}

export default MealDetailsComponent;

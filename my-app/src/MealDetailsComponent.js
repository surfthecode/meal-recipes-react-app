import React from "react";

// MealDetailsComponent - <h3>, <p>, <a>

// Refactor: add all variables into one object
const style = {
  details: {
    backgroundColor: "blanchedalmond",
    borderRadius: "10px",
    padding: "5px 10px",
  },
  title: {
    fontSize: "22px",
    color: "green",
  },
  image: {
    borderRadius: "50%",
    width: 150,
    height: 150,
  },
  info: {
    color: "grey",
  },
  label: {
    color: "black",
    fontSize: "12px",
  },
};

function MealDetailsComponent(props) {
  return (
    <>
      <div style={{}}>
        <img src={props.imageSRC} alt={props.title} style={style.image}></img>
      </div>

      <div style={style.details}>
        <h3 style={style.title}>{props.title}</h3>
        <p style={style.info}>
          <span style={style.label}>Area: </span>
          {props.area}
        </p>
        <p style={style.info}>
          <span style={style.label}>Category: </span>
          {props.category}
        </p>
      </div>
    </>
  );
}

export default MealDetailsComponent;

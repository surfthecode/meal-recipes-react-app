import React from "react";

// MealDetailsComponent - <h3>, <p>, <a>
function MealDetailsComponent(props) {
  const detailsStyle = {
    backgroundColor: "blanchedalmond",
    borderRadius: "10px",
    padding: "5px 10px",
  };

  const titleStyle = {
    fontSize: "22px",
    color: "green",
  };

  const infoStyle = {
    color: "grey",
  };

  const labelStyle = {
    color: "black",
    fontSize: "12px",
  };

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

      <div style={detailsStyle}>
        <h3 style={titleStyle}>{props.title}</h3>
        <p style={infoStyle}>
          <span style={labelStyle}>Area: </span>
          {props.area}
        </p>
        <p style={infoStyle}>
          <span style={labelStyle}>Category: </span>
          {props.category}
        </p>
      </div>
    </>
  );
}

export default MealDetailsComponent;

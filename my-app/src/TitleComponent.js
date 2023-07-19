import React from "react";

const title = {
  fontSize: "32px",
  color: "green",
  letterSpacing: "1.5px",
};

export default function TitleComponent(props) {
  return <h1 style={title}>{props.text}</h1>;
}

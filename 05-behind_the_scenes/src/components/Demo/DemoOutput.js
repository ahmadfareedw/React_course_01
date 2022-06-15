import React from "react";

const DemoOutput = (props) => {
  console.log("DEMO RUNNING");

  return <p>{props.show ? "this is new" : ""}</p>;
};

export default DemoOutput;

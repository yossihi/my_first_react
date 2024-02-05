import React from "react";

const Camel = ({ chiledColor, setchiledColor }) => {
  const changeColor=(e) => {
    setchiledColor(e.target.value);
  }
  return (
    <div style={{color: chiledColor}}>
      <h1>Camel </h1> 
      <input type="color" onChange={changeColor} value={chiledColor}></input>
    </div>
  );
};

export default Camel;

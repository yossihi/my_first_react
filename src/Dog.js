import React from "react";

const Dog = ({ chiledColor, setchiledColor, setmynumber }) => {
  const changeColor=(e) => {
    setchiledColor(e.target.value);
  }

  const change_mynumber=(e) => {
    setmynumber(e.target.value)
  }
  return (
    <div style={{color: chiledColor}}>
      <h1>Dog </h1> 
      <input type="color" onChange={changeColor} value={chiledColor}></input>
      <br></br>
      <input type="number" onChange={change_mynumber} placeholder="insert some number"></input>
    </div>
  );
};

export default Dog;
import { useState } from "react";
import Button from "./Button.jsx";

function Counter({count, increment, reset}) {
  
  const handleIncrement = () => {
    increment;
  }

  const handleReset = () => {
    reset;
  }

  return (
    <div>
      <h1>Counter</h1>
      <p>count: {count}</p>
      <Button onClick = {increment} text = "Increment"/>
      <Button onClick = {reset} text = "Reset"/>
    </div>
  );
}

export default Counter;
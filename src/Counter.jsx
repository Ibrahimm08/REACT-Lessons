import { useState } from "react";
import Button from "./Button.jsx";

function Counter() {
  
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>count: {count}</p>
      <Button onClick = {handleIncrement} text = "Increment"/>
      <Button onClick = {handleReset} text = "Reset"/>
    </div>
  );
}

export default Counter;
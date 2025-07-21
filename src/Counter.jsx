import Button from "./Button.jsx";

function Counter() {
  const count = 0;

  return (
    <div>
      <h1>Counter</h1>
      <p>count: {count}</p>
      <Button text = "Increment"/>
      <Button text = "Reset"/>
    </div>
  );
}

export default Counter
import React, { useState } from 'react';
import Counter from "./Counter";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(count - count);
  };

  return (
    <div>
      <Counter count={count} increment={increment} reset={reset}/>
    </div>
  );
}
export default App
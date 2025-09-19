import React from "react";
import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(() => {
    const initialCount = 10;
    return initialCount;
  });
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;

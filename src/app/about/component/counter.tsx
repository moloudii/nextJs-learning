"use client";
import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(1);
  return (
    <div>
      Counter
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Change
      </button>
      <span>{counter}</span>
    </div>
  );
}

export default Counter;

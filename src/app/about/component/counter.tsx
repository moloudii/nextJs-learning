"use client";
import { useState } from "react";
// import ServerComp from "./serverComp";

function Counter({ children }: { children: React.ReactNode }) {
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
      {/* <ServerComp /> Client Component */}
      {children}
      <span>{counter}</span>
    </div>
  );
}

export default Counter;

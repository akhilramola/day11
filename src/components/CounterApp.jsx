import React, { useState } from "react";
import "./CounterApp.css";

const CounterApp = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="disp">
      <div className="divbox">
        <h1>{count}</h1>
        <button
          className="btn"
          onClick={() => {
            setCount(count + 1);
          }}>
          Increment
        </button>

        <button
          className="btn"
          onClick={() => {
            setCount(0);
          }}>
          Reset
        </button>

        <button
          className="btn"
          onClick={() => {
            setCount(count - 1);
          }}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default CounterApp;
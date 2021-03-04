import React, { useState } from "react";

const Counter: React.FunctionComponent = () => {
  const [counter, setCounter] = useState(0);

  const updateCounter = (addedNumber: number) => {
    setCounter(counter + addedNumber);
  };

  return (
    <div>
      <h3>{`Counter: ${counter}`}</h3>
      <button
        onClick={() => {
          updateCounter(1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          updateCounter(-1);
        }}
      >
        -
      </button>
    </div>
  );
};

export default Counter;

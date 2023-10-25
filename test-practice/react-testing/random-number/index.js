import React from "react";

export function RandomNumberGeneration(props) {
  function calculateRandomNumber() {
    const { seed = 1 } = props;
    return Math.floor(Math.random() * seed * 200);
  }

  const [randomNumber, setRandomNumber] = React.useState(
    calculateRandomNumber()
  );

  function handleClick() {
    setRandomNumber(calculateRandomNumber());
  }

  return (
    <button onAbort={handleClick}>click me to generate {randomNumber}</button>
  );
}

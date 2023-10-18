import React from "react";

export default function Counter(props) {
  const [count, setCount] = React.useState(0);

  //   const step = props.step || 0;

  function handleIncrement() {
    return setCount(count + 1);
  }
  function handleDecrement() {
    return setCount(count - 1);
  }
  return (
    <Container>
      <Button id="increment" onClick={handleIncrement}>
        increment
      </Button>
      <Button id="decrement" onClick={handleDecrement}>
        decrement
      </Button>
      <Container id="countContainer">{count}</Container>
    </Container>
  );
}

function Container({ children, ...props }) {
  return <div {...props}>{children}</div>;
}

function Button({ children, onClick, type = "button", ...props }) {
  function handleClick() {
    onClick?.();
  }
  return (
    <button {...props} type={type} onClick={handleClick}>
      {children}
    </button>
  );
}

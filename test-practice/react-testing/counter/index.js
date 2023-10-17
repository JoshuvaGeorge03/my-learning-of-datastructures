import React from "react";

export default function Counter(props) {

  const [count, setCount] = React.useState(0);

//   const step = props.step || 0;

  function handleIncrement() {
    return setCount(++count);
  }
  function handleDecrement() {
    return setCount(--count);
  }
  return (
    <Container>
      <Button onClick={handleIncrement}>increment</Button>
      <Button onClick={handleDecrement}>decrement</Button>
      <Container id="countContainer">{count}</Container>
    </Container>
  );
}

function Container({ children, ...props }) {
  return <div {...props}>{children}</div>;
}

function Button({ children, onClick, type = 'button' }) {
  function handleClick() {
    onClick?.();
  }
  return (
    <button type={type} onClick={handleClick}>
      {children}
    </button>
  );
}

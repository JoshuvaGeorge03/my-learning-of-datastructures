import React from "react";
import Container from "../components-lib/Container";
import Button from "../components-lib/Button";

import TextBox from "../components-lib/TextBox";

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

const addAction = "@todolist/add";

function addActionCreator(data) {
  return {
    type: addAction,
    data,
  };
}

export default function TodoList({ initialTodos = [], needDefault = true }) {
  const [todoList, dispatch] = React.useReducer(
    (prevState, action) => {
      console.log("prev state", prevState);
      if (action.type === addAction) {
        return [...prevState, action.data];
      }
      return prevState;
    },
    initialTodos,
    (initialTodos) =>
      needDefault ? initialTodos.push("joshuva") : initialTodos
  );

  function addTodo(data) {
    return dispatch(addActionCreator(data));
  }

  return (
    <React.Fragment>
      <Container>
        <TextBox />
        <Button>Add</Button>
      </Container>
      <Container>
        
      </Container>
    </React.Fragment>
  );
}

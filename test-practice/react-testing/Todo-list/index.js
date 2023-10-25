import React from "react";
import Container from "../components-lib/Container";
import Button from "../components-lib/Button";
import TextBox from "../components-lib/TextBox";

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
        <Button onClick={addTodo}>Add</Button>
      </Container>
      <Container>
        
      </Container>
    </React.Fragment>
  );
}

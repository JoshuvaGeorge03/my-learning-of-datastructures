import React from "react";
import Container from "../components-lib/Container";
import Button from "../components-lib/Button";
import TextBox from "../components-lib/TextBox";
import List from "../components-lib/List";

const addAction = "addAction";

function addActionCreator(data) {
  return {
    type: addAction,
    data,
  };
}

export default function TodoList({ initialTodos = [], needDefault = true }) {
  
  const [todoLists, dispatch] = React.useReducer(
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


  const [todoItemData, setTodoItemData] = React.useState('');

  function addTodo() {
    return dispatch(addActionCreator(todoItemData));
  }

  return (
    <React.Fragment>
      <Container>
        <TextBox onChange={setTodoItemData} value={todoItemData} />
        <Button onClick={addTodo}>Add</Button>
      </Container>
      <Container>
        <List lists={todoLists} />
      </Container>
    </React.Fragment>
  );
}

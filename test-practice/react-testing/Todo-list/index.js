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

export default function TodoList({ initialTodos = [], needDefault = false }) {
  
  const [todoLists, dispatch] = React.useReducer(
    (prevState, action) => {
      console.log("prev state", prevState);
      if (action.type === addAction) {
        return [...prevState, action.data];
      }
      return prevState;
    },
    initialTodos,
    (todos) => {
      return needDefault ? [...todos, 'joshuva'] : todos;
    }
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

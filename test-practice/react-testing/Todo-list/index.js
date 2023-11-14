import React from "react";
import Container from "../components-lib/Container";
import Button from "../components-lib/Button";
import TextBox from "../components-lib/TextBox";
import List from "../components-lib/List";

const addAction = "addAction";
const removeAction = "removeAction";

function addActionCreator(data) {
  return {
    type: addAction,
    data,
  };
}

function removeActionCreator(data) {
  return {
    type: removeAction,
    data,
  };
}

export default function TodoList({ initialTodos = [], needDefault = false }) {
  const [todoLists, dispatch] = React.useReducer(
    (prevState, action) => {
      if (action.type === addAction) {
        return [...prevState, action.data];
      }
      if(action.type === removeAction) {
        return prevState.filter(todoList => todoList !== action.data);
      }
      return prevState;
    },
    initialTodos,
    (todos) => {
      return needDefault ? [...todos, "joshuva"] : todos;
    }
  );

  const [todoItemData, setTodoItemData] = React.useState("");

  function addTodo() {
    setTodoItemData("");
    return dispatch(addActionCreator(todoItemData));
  }

  function removeTodo(list) {
    return dispatch(removeActionCreator(list));
  }

  return (
    <React.Fragment>
      <Container>
        <TextBox onChange={setTodoItemData} value={todoItemData} />
        <Button onClick={addTodo}>Add</Button>
      </Container>
      <Container>
        <List lists={todoLists} handleTaskFinish={removeTodo} />
      </Container>
    </React.Fragment>
  );
}

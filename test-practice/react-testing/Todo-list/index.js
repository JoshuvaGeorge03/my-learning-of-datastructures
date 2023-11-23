import React from "react";
import Container from "../components-lib/Container";
import Button from "../components-lib/Button";
import TextBox from "../components-lib/TextBox";
import List from "../components-lib/List";

const addAction = "addAction";
const removeAction = "removeAction";
const editAction = "editAction";

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

function editActionCreator(data) {
  return {
    type: editAction,
    data,
  };
}

export default function TodoList({ initialTodos = [], needDefault = false }) {
  const [todoLists, dispatch] = React.useReducer(
    (prevState, action) => {
      if (action.type === addAction) {
        return [...prevState, action.data];
      }
      if (action.type === removeAction) {
        return prevState.filter((todoList) => todoList !== action.data);
      }

      if (action.type === editAction) {
        return prevState.map((list) => {
          const { oldList, updateList } = action.data;
          if (list === oldList) {
            return updateList;
          }
          return list;
        });
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

  function handleUpdate(oldList, updateList) {
    return dispatch(editActionCreator({ updateList, oldList }));
  }

  return (
    <React.Fragment>
      <Container>
        <TextBox onChange={setTodoItemData} value={todoItemData} />
        <Button onClick={addTodo}>Add</Button>
      </Container>
      <Container>
        <List lists={todoLists} handleTaskFinish={removeTodo} handleUpdate={handleUpdate} />
      </Container>
    </React.Fragment>
  );
}

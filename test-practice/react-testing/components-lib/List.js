import React from "react";
import Container from "./Container";
import Button from "./Button";
import TextBox from "./TextBox";

export default function List({ lists, handleTaskFinish }) {
  return (
    <section>
      {lists.map((list) => (
        <ListItem key={list} list={list} handleTaskFinish={handleTaskFinish} />
      ))}
    </section>
  );
}

function ListItem({ list, handleTaskFinish, handleTaskUpdate }) {
  const [isEdit, setIsEdit] = React.useState(false);

  function setEditState() {
    setIsEdit(!isEdit);
  }

  return (
    <React.Fragment>
      {isEdit ? (
        <TextBox />
      ) : (
        <Container onClick={setEditState} data-testid="listElements" id={list}>
          {list}
        </Container>
      )}
      <ListButton isEdit={isEdit} handleUpdate={handleTaskUpdate} handleFinish={handleTaskFinish} list={list} />
    </React.Fragment>
  );
}

function ListButton({ isEdit, handleUpdate, handleFinish, list }) {
  function handleClick() {
    if (isEdit) {
      return handleUpdate(list);
    }
    return handleFinish(list);
  }

  return (
    <Button onClick={handleClick}>{isEdit ? "Edit Me" : "Finished"}</Button>
  );
}

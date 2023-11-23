import React from "react";
import Container from "./Container";
import Button from "./Button";
import TextBox from "./TextBox";

export default function List({ lists, handleTaskFinish, handleUpdate }) {
  return (
    <section>
      {lists.map((list) => (
        <ListItem key={list} list={list} handleTaskFinish={handleTaskFinish} handleTaskUpdate={handleUpdate} />
      ))}
    </section>
  );
}

function ListItem({ list, handleTaskFinish, handleTaskUpdate }) {
  const [isEdit, setIsEdit] = React.useState(false);
  const [editText, setEditText] = React.useState(list);

  function setEditState() {
    setIsEdit(!isEdit);
  }

  function handleEditStateText(value) {
    setEditText(value);
  }

  function handleClick() {
    setEditState();
    setEditText('');
    if (isEdit) {
      return handleTaskUpdate(list, editText);
    }
    return handleTaskFinish(list);
  }

  return (
    <React.Fragment>
      {isEdit ? (
        <TextBox name="editMe" value={editText} onChange={handleEditStateText} data-testid="editMe" />
      ) : (
        <Container onClick={setEditState} data-testid="listElements" id={list}>
          {list}
        </Container>
      )}
      <ListButton handleClick={handleClick} isEdit={isEdit}  />
    </React.Fragment>
  );
}

function ListButton({ isEdit, handleClick }) {


  return (
    <Button onClick={handleClick}>{isEdit ? "Edit Me" : "Finished"}</Button>
  );
}

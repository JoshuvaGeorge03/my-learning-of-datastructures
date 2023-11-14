import React from "react";
import Container from "./Container";
import Button from "./Button";

export default function List({ lists, handleTaskFinish }) {
  return (
    <section>
      {lists.map((list) => (
        <ListItem key={list} list={list} handleTaskFinish={handleTaskFinish} />
      ))}
    </section>
  );
}

function ListItem({ list, handleTaskFinish }) {

  function removeTodo() {
    handleTaskFinish?.(list);
  }

  return <Container data-testid="listElements" id={list}>{list}
    <Button onClick={removeTodo}>Finished</Button>
  </Container>;
}

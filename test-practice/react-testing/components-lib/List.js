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

  return <React.Fragment>
    <Container data-testid="listElements" id={list}>{list}
  </Container>
  <Button onClick={removeTodo}>Finished</Button>
  </React.Fragment>;
}

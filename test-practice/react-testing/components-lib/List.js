import React from "react";
import Container from "./Container";

export default function List({ lists }) {
  return (
    <section>
      {lists.map((list) => (
        <ListItem key={list} list={list} />
      ))}
    </section>
  );
}

function ListItem({ list }) {
  return <Container data-testid="listElements" id={list}>{list}</Container>;
}

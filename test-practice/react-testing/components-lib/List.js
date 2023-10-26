import React from "react";

export default function List({ lists }) {
  return (
    <section>
      {lists.map((list) => (
        <ListItem list={list} />
      ))}
    </section>
  );
}

function ListItem({ list }) {
  return <Container>{list}</Container>;
}

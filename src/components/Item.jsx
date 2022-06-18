import React from "react";
import Container from "./container/Container";

const Item = ({ searchTerm }) => {
  return (
    <div>
      <Container searchTerm={searchTerm} />
    </div>
  );
};

export default Item;

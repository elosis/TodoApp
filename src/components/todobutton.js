import React from "react";
import { TodoContext, useContext } from "../stores/context";

export default function TodoButton(props) {
  const { onFilter } = useContext(TodoContext);

  return (
    <a style={{ cursor: "pointer" }} onClick={() => onFilter(props.filter)}>
      {props.filter}
    </a>
  );
}

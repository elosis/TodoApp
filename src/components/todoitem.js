import React from "react";
import "../styles/App.css";
import { TodoContext, useContext } from "../stores/context";

export default function TodoItem(props) {
  const { handleChangeItem, handleRemove } = useContext(TodoContext);

  return (
    <div>
      <input
        type="checkbox"
        className="todo-input"
        defaultChecked={props.todo.isCompleted}
        onChange={() => handleChangeItem(props.todo.id)}
      />
      <label
        className={props.todo.isCompleted ? "todo-label-checked" : "todo-label"}
      >
        {props.todo.todoName}
      </label>
      <button
        onClick={() => {
          handleRemove(props.todo.id);
        }}
        className="destroy"
      ></button>
    </div>
  );
}

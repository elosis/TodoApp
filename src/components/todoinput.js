import React from "react";
import { useState } from "react";
import { TodoContext, useContext } from "../stores/context";

export default function TodoInput() {
  const { completeAll, handleChange, handleKeyDown, todoData } =
    useContext(TodoContext);
  return (
    <div>
      <div className="dropdown" onClick={() => completeAll()}></div>
      <input
        className="new-todo"
        type="text"
        value={todoData.message}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="What needs to be done?"
      ></input>
    </div>
  );
}

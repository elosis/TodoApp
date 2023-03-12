import React from "react";
import TodoButton from "./todobutton";
import "../styles/App.css";
import { TodoContext, useContext } from "../stores/context";

export default function Filters() {
  const { completedCount, activeCount, todoData, onClearCompleted } =
    useContext(TodoContext);

  const itemWord = activeCount === 1 ? "item" : "items";

  const filters = ["All", "Active", "Completed"];

  return todoData.todos.length > 0 ? (
    <div className="footer">
      <span>
        <strong>{activeCount > 0 ? activeCount : 0} </strong>
        {itemWord} left
      </span>
      <ul className="filters">
        {filters.map((filter) => (
          <li key={filter}>
            <TodoButton filter={filter} />
          </li>
        ))}
      </ul>
      {completedCount ? (
        <button
          style={{ cursor: "pointer" }}
          onClick={() => onClearCompleted()}
        >
          Clear Completed
        </button>
      ) : (
        ""
      )}
    </div>
  ) : (
    <div></div>
  );
}

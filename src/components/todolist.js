import React from "react";
import TodoItem from "./todoitem";
import { useContext, TodoContext } from "../stores/context";

export default function TodoList() {
  const { filteredTodos } = useContext(TodoContext);
  return (
    <div className="todo-full-list">
      <ul className="todo-ul">
        {filteredTodos.map((todo) => (
          <li key={todo.id} className="todo-li">
            <div className="todo-checkbox-arrangement">
              <TodoItem todo={todo} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

import { Children, createContext, useContext, useState, useMemo } from "react";

const TodoContext = createContext();

function TodoLayer(props) {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");
  const [message, setMessage] = useState("");

  const todoData = {
    todos,
    setTodos,
    filter,
    setFilter,
    message,
    setMessage,
  };

  function addTodo(todoName) {
    const getTodoList = todos.concat({
      todoName: todoName,
      isCompleted: false,
      id: Date.now(),
    });
    setTodos(getTodoList);
  }

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case "All":
        return todos;
      case "Completed":
        return todos.filter((todo) => todo.isCompleted);
      case "Active":
        return todos.filter((todo) => !todo.isCompleted);
      default:
        return todos;
    }
  }, [filter, todos]);

  const getActiveCount = () => {
    return todos.reduce(
      (count, todo) => (!todo.isCompleted ? count + 1 : count),
      0
    );
  };

  const getCompletedCount = () => {
    return todos.reduce(
      (count, todo) => (todo.isCompleted ? count + 1 : count),
      0
    );
  };

  const completeAll = () => {
    const tempTodos = todoData.todos.map((todo) => todo);
    tempTodos.forEach((todo) => (todo.isCompleted = true));
    todoData.setTodos(tempTodos);
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && message) {
      addTodo(message);
      setMessage("");
    }
  };

  const onClearCompleted = () => {
    const activeTodos = todos.filter((todo) => !todo.isCompleted);
    setTodos(activeTodos);
    setFilter("");
  };

  const onFilter = (filter) => {
    setFilter(filter);
  };

  const handleRemove = (id) => {
    const newList = todos.filter((todo) => todo.id !== id);
    setTodos(newList);
  };

  function handleChangeItem(id) {
    const index = todos.findIndex((todo) => todo.id === id);
    todos[index].isCompleted = !todos[index].isCompleted;
    setTodos(todos.map((todo) => ({ ...todo })));
  }

  const activeCount = getActiveCount();
  const completedCount = getCompletedCount();

  const data = {
    activeCount,
    completedCount,
    addTodo,
    filteredTodos,
    props,
    todoData,
    completeAll,
    handleChange,
    handleKeyDown,
    onClearCompleted,
    onFilter,
    handleRemove,
    handleChangeItem,
  };

  return (
    <TodoContext.Provider value={data}>{props.children}</TodoContext.Provider>
  );
}

export { TodoLayer, TodoContext, useContext };

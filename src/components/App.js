import TodoInput from "./todoinput";
import TodoList from "./todolist.js";
import Filters from "./filters";
import { TodoLayer, useContext } from "../stores/context";

function App() {
  return (
    <TodoLayer>
      <div className="todosapp">
        <div className="todoapp-cap">todos</div>
        <TodoInput />
        <TodoList />
        <Filters />
      </div>
    </TodoLayer>
  );
}

export default App;

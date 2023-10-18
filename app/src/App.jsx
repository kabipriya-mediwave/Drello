import { useReducer } from "react";
import "./App.css";
import Todo from "./components/Todo";
function App() {
  const [tasks, dispatch] = useReducer(todoReducer, []);

  function todoReducer(tasks, action) {
    switch (action.type) {
      case "TODO_ADD": {
        return [
          ...tasks,
          {
            id: new Date().getTime(),
            text: action.value,
            inState: "todo",
          },
        ];
      }
      case "TODO_DELETE": {
        const filtered = tasks.filter((t) => t.id != action.value);
        return [...filtered];
      }

      case "TODO_EDIT": {
        const newtasks = [...tasks];
        const idx = newtasks.findIndex((nt) => nt.id === action.value.id);
        if (idx !== -1) {
          newtasks[idx]["text"] = action.value.text;
        }
        return newtasks;
      }

      default:
        throw Error("Unknown action: " + action.type);
    }
  }

  function handleAdd(text) {
    dispatch({
      type: "TODO_ADD",
      value: text,
    });
  }
  function handleEdit(text, id) {
    dispatch({
      type: "TODO_EDIT",
      value: { text, id },
    });
  }

  function handleDelete(id) {
    dispatch({
      type: "TODO_DELETE",
      value: id,
    });
  }

  return (
    <div>
      <header className="main">
        <h1>DRELLO</h1>
      </header>
      <div className="container ">
        <Todo
          tasks={tasks}
          handleAdd={handleAdd}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
        <div className="wrapper">
          <div className="taskDiv">
            <div className="task-header">
              <h2>PROGRESS</h2>
            </div>
          </div>
        </div>

        <div className="wrapper">
          <div className="taskDiv">
            <div className="task-header">
              <h2>COMPLETED</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

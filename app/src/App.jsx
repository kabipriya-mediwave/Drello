import "./App.css";
import Todo from "./components/Todo";
function App() {
  return (
    <div>
      <header class="main">
        <h1>DRELLO</h1>
      </header>
      <div className="container ">
        <Todo />
        <div class="list-wrapper">
          <div class="taskDiv">
            <div class="task-header">
              <h2>PROCESS</h2>
            </div>
          </div>
        </div>

        <div class="list-wrapper">
          <div class="taskDiv">
            <div class="task-header">
              <h2>COMPLETED</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

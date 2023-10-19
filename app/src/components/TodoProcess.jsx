// const InProgress = () => {
//   return (
//     <>
//       <div className="taskDiv"></div>
//     </>
//   );
// };

// export default InProgress;
import React from "react";
function Process({ todos, handleDragAndDrop }) {
  const handleDrop = (e) => {
    e.preventDefault();
    const todoId = e.dataTransfer.getData("text/plain");
    const draggedTodo = todos.find((todo) => todo.id.toString() === todoId);
    if (draggedTodo) {
      handleDragAndDrop(draggedTodo, "process");
    }
  };
  return (
    <div
      className="taskDiv"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <div className="task-header">
        <h2>PROGRESS</h2>
      </div>
      {/* Render the Process column todos here */}
    </div>
  );
}
export default Process;

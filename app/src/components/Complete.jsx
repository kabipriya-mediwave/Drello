import React from "react";
function Complete({ todos, column, handleDelete, handleDragAndDrop }) {
  const handleDrop = (e) => {
    e.preventDefault();
    const todoId = e.dataTransfer.getData("text/plain");
    const draggedTodo = todos.find((todo) => todo.id.toString() === todoId);
    if (draggedTodo) {
      handleDragAndDrop(draggedTodo, column);
    }
  };
  return (
    <div
      className="taskDiv"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <div className="task-header">
        <h2>{column.toUpperCase()}</h2>
      </div>
      <div className="task-list">
        {todos
          .filter((todo) => todo.instate === column)
          .map((todo) => (
            <div
              key={todo.id}
              draggable={true}
              onDragStart={(e) => {
                e.dataTransfer.setData("text/plain", todo.id.toString());
              }}
            >
              {todo.text}
            </div>
          ))}
      </div>

    </div>
  );
}
export default Complete;

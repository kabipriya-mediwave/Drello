import { useState } from "react";
const TodoCard = (props) => {
  const { handleDelete, editContent, task } = props;
  const [content, setContent] = useState("");
  const [isEdit, setIsEdit] = useState(true);

  function handleDeleteClick(taskId) {
    console.log(taskId);
    handleDelete(taskId);
  }
  function handleEditContent(id) {
    editContent(content, id);
    setIsEdit(false);
  }
  function enableEdit() {
    setIsEdit(false);
  }

  function formatDateTime(date) {
    const year = new Date(date).getFullYear();
    const month = String(new Date(date).getMonth() + 1).padStart(2, "0");
    const day = String(new Date(date).getDate()).padStart(2, "0");
    const hours = String(new Date(date).getHours()).padStart(2, "0");
    const minutes = String(new Date(date).getMinutes()).padStart(2, "0");
    const seconds = String(new Date(date).getSeconds()).padStart(2, "0");

    const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    return formattedDateTime;
  }
  return (
    <>
      <form className="list-group">
        <div className="list-item title" draggable>
          <button onClick={() => handleDeleteClick(task.id)}>❌</button>
        </div>
        <div className="list-item-message" onClick={enableEdit}>
          <textarea
            className="textarea"
            placeholder="Enter text..."
            value={isEdit ? task.text : content}
            onChange={(e) => setContent(e.target.value)}
            onBlur={() => handleEditContent(task.id)}
            required
          />
        </div>
        <div className="list-item time">{formatDateTime(task.time)}</div>
      </form>
    </>
  );
};
export default TodoCard;

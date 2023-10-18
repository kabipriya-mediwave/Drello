const TodoCard = () => {
  return (
    <>
      <div class="list-group">
        <span class="list-item-message" contenteditable="true">
          <p>TASK TO COMPLETE</p>
        </span>
        <div class="list-item-time"></div>
      </div>
    </>
  );
};

export default TodoCard;

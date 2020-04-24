import React from "react";
import "./ToDoItem.css";

function ToDoItem({ id, text, edit, removeToDo, editToDo }) {

  //Handler to remove specific item from list, uses 
  //passthrough function from ToDoItemList
  function handleRemove() {
    removeToDo(id);
  }

  function handleEdit() {
    editToDo(id)
  }

  function handleEditSubmit(){
  }

  function handleChange(){
    
  }
  

  const editHtml = (
    <form onSubmit={handleEditSubmit}>
    <label htmlFor="text">To do: </label>
    <input
      id="text"
      name="text"
      value={text}
      onChange={handleChange}
    />);
  
  const listHtml = ( <div className="ToDoItem-item" id={id}>
      {text}
      <button className="ToDoItem-delete-Btn" onClick={handleRemove}>Delete task</button>
      <button className="ToDoItem-delete-Btn" onClick={handleEdit}>Edit task</button>
    </div>);

  <button>update to do!</button>
  </form>)

  return edit ? editHtml : listHtml

}

export default ToDoItem;
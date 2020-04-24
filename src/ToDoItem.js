import React, {useState }from "react";
import "./ToDoItem.css";


/**Renders to do item, if ToDoItem.edit is true renders as form that can be
edited.  (?Could potentially split this functionality and call appropriate via 
ternary in ToDoList?) 
*/

function ToDoItem({ id, text, edit, removeToDo, editToDoSubmit, editToDo }) {

  const INITIAL_STATE = { text }

  const [formData, setFormData] = useState(INITIAL_STATE);
  
  //Handler to remove specific item from list, uses 
  //passthrough function from ToDoItemList
  function handleRemove() {
    removeToDo(id);
  }

  //Handler to start edit of item from list, uses 
  //passthrough function from ToDoItemList
  function handleEdit() {
    editToDo(id)
  }

  //Handler to change an edited item, uses 
  //passthrough function from ToDoItemList
  const handleEditSubmit = evt => {
    evt.preventDefault();
    editToDoSubmit(formData, id);
  };
  // function handleEditSubmit(){
  //   editToDoSubmit(id)
  // }

  //Handler to keep state updated as item is edited.
  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(data => ({
      ...data, 
      [name]: value
    }));
  };
  

  const editHtml = (<div>
                      <form onSubmit={handleEditSubmit}>
                        <label htmlFor="text">To do: </label>
                        <input id="text" name="text" value={formData.text} onChange={handleChange}/>
                        <button>update to do!</button>
                      </form>
                    </div>);
  
  const listHtml = (<div className="ToDoItem-item" id={id}>
                      {text}
                      <button className="ToDoItem-delete-Btn" onClick={handleRemove}>Delete task</button>
                      <button className="ToDoItem-delete-Btn" onClick={handleEdit}>Edit task</button>
                    </div>);


  return edit ? editHtml : listHtml

}

export default ToDoItem;
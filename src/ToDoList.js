import React, { useState } from 'react';
import './ToDoList.css';
import ToDoItem from "./ToDoItem";
import ToDoForm from "./ToDoForm";
import { v4 as uuid } from "uuid";

function ToDoList() {

  // set up an empty array of ToDos with state
  const [toDoItems, setToDoItems] = useState([]);

  // Passthrough function to add a new item to toDoItems
  const addToDo = toDo => {
    let newToDo = { ...toDo, id: uuid(), edit: false };
    setToDoItems(ToDoItems => [...toDoItems, newToDo]);
  };

  //Passthrough function for the ToDoItem to remove it from state

const removeToDo = (ToDoId) => {
  const toDoItemsCopy = toDoItems.filter((i) => i.id !== ToDoId);
  setToDoItems(toDoItemsCopy);
};

// Updates edited toDoItem, currently only copes with text field,
// ?Could spread the old object the the formData after it ?
// yadayada ToDoId ? {...i, edit: false, ...formData } : i)))
const editToDoSubmit = (formData, ToDoId) => {
  console.log("formData: ", formData, "ToDoId:", ToDoId, "toDoItems: ", toDoItems)
  setToDoItems(toDoItems.map((i) => (
    i.id === ToDoId ? {...i, edit : false, text : formData.text} : i )));
;}

const editToDo = (ToDoId) => {

  setToDoItems(toDoItems.map((i) => (
                      i.id === ToDoId ? {...i, edit : true} : i )))
};

// function ToDoItem({ id, text, edit, removeToDo, editToDoSubmit, editToDo }

// Create the ToDoList ready to render
  const renderToDoItems = () => {
    return (
      <div className="to-do-list" data-testid="ToDoList-list-container">
        {toDoItems.map(item => <ToDoItem id={item.id}
          key={item.id}
          text={item.text}
          edit={item.edit}
          removeToDo={removeToDo}
          editToDoSubmit= {editToDoSubmit}
          editToDo={ editToDo } />)}
      </div>
    );
  };

  //Render an add item form and the current list of ToDos.
  return (
    <div className="ToDo-List" data-testid="ToDoList-form-container">
      <ToDoForm addToDo={addToDo} />
      {renderToDoItems()}
    </div>
  );
};

export default ToDoList;
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
    let newToDo = { ...toDo, id: uuid() };
    setToDoItems(ToDoItems => [...toDoItems, newToDo]);
  };

  //Passthrough function for the ToDoItem to remove it from state

const removeToDo = (ToDoId) => {
  const toDoItemsCopy = toDoItems.filter((i) => i.id !== ToDoId);
  setToDoItems(toDoItemsCopy);
};

// Create the ToDoList ready to render
  const renderToDoItems = () => {
    return (
      <div className="to-do-list" data-testid="ToDoList-list-container">
        {toDoItems.map(item => <ToDoItem id={item.id}
          key={item.id}
          text={item.text}
          removeToDo={removeToDo} />)}
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
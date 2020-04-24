import React from "react";
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import ToDoList from "./ToDoList";


function addToDoHelper(getByLabelText,queryByText, toDo) {

  const textInput = getByLabelText("To do:");
  const submitBox = queryByText("Add a new to do!");
  fireEvent.change(textInput, { target: { value: toDo }});
  fireEvent.click(submitBox);
}

it("renders without crashing", function() {
  render(<ToDoList />);
});

it("matches snapshot", function() {
  const {asFragment} = render(<ToDoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add a new to do item", function() {
  const { getByLabelText, queryByText } = render(<ToDoList />);

  // no to do yet
  expect(queryByText("Delete task")).not.toBeInTheDocument();

  addToDoHelper(getByLabelText, queryByText, "To Do Test 1");

  // item exists!
  expect(queryByText("To Do Test 1")).toBeInTheDocument();
});

it("can delete a to do item", function() {
  const { getByLabelText, queryByText, getAllByText } = render(<ToDoList />);

  // no to do yet
  expect(queryByText("Delete task")).not.toBeInTheDocument();

  addToDoHelper(getByLabelText, queryByText, "To Do Test 1");
  addToDoHelper(getByLabelText, queryByText, "To Do Test 2");

  // item exists!
  expect(queryByText("To Do Test 1")).toBeInTheDocument();
  expect(queryByText("To Do Test 2")).toBeInTheDocument();

  const deleteButtons = getAllByText("Delete task");

  fireEvent.click(deleteButtons[0]);
  expect(queryByText("To Do Test 1")).not.toBeInTheDocument();
});
import React from "react";
import { useSelector } from "react-redux";
import ToDo from "./Todo";

function TodoContainer() {
  const todos = useSelector((state) => state.todos.entities);
  
  const todoList = todos.map((todo, index) => <ToDo key={index} text={todo} />);
  return (
    <div>
      <ul>{todoList}</ul>
    </div>
  )
}

export default TodoContainer;

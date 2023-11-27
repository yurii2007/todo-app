import React from "react";
import TodoItem from "./TodoItem";
import PaginationBtn from "./PaginationBtn";

const TodoList = ({ todos }) => {
  return (
    <>
      <ul className="flex flex-col gap-4 items-center">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      <PaginationBtn />
    </>
  );
};

export default TodoList;

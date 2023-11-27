import React from "react";
import TodoItem from "./TodoItem";
import LoadMore from "./LoadMore";

const TodoList = ({ todos }) => {
  return (
    <>
      <ul className="flex flex-col gap-4 items-center">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      <LoadMore />
    </>
  );
};

export default TodoList;

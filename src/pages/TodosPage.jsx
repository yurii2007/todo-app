import { useSelector } from "react-redux";

import { selectTodos } from "../redux/selectors";

import TodoList from "../components/Todos/TodoList";

const TodosPage = () => {
  const todos = useSelector(selectTodos);

  return (
    <>
      <TodoList todos={todos} />
    </>
  );
};

export default TodosPage;

import { useSelector } from "react-redux";

import { selectTodos } from "../redux/selectors";

import TodoList from "../components/Todos/TodoList";

const TodosPage = () => {
  const todos = useSelector(selectTodos);

  return (
    <section className="py-3 md:py-4">
      <TodoList todos={todos} />
    </section>
  );
};

export default TodosPage;

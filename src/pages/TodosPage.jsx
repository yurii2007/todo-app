import { useSelector } from "react-redux";
import { useState } from "react";

import { selectTodos } from "../redux/selectors";

import { ReactComponent as PlusIcon } from "../images/svg/plus.svg";
import TodoList from "../components/Todos/TodoList";
import AddTodoForm from "../components/Todos/AddTodoForm";
import Modal from "../components/Modal";

const TodosPage = () => {
  const todos = useSelector(selectTodos);
  const [isModalOpen, setModalOpen] = useState(false);

  const closeModal = () => setModalOpen(false);

  return (
    <section className="py-3 md:py-4 flex flex-col items-center justify-center gap-2 md:gap-4">
      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <AddTodoForm closeModal={closeModal} />
        </Modal>
      )}
      <button
        className="fixed bottom-6 xl:bottom-10 right-6 xl:right-10 bg-slate-950 p-2 rounded-full flex items-center justify-center"
        onClick={() => setModalOpen(true)}
        type="button"
      >
        <PlusIcon className="fill-white" width={24} height={24} />
      </button>
      <TodoList todos={todos} />
    </section>
  );
};

export default TodosPage;

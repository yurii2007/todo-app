import { useDispatch } from "react-redux";

import { createTodo } from "../../redux/todoSlice.js/operations";

import { ReactComponent as CloseIcon } from "../../images/svg/delete_icon.svg";

const AddTodoForm = ({ closeModal }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    // cancel default form submit behavior
    e.preventDefault();

    // create new todo and send request
    const newTodo = {
      title: e.target.elements.title.value,
      completed: e.target.elements.completed.checked,
    };
    dispatch(createTodo(newTodo));
    closeModal();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white px-5 pt-10 pb-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-7 md:px-7 md:pb-8 md:pt-14"
    >
      <input
        type="text"
        name="title"
        required
        id="title"
        className="bg-slate-900 text-white focus-within:outline-font-header text-xs p-2 md:p-3 md:text-lg"
        placeholder="Title"
      />
      <label
        htmlFor="completed"
        className="flex gap-3 justify-start items-center text-xs md:text-lg cursor-pointer"
      >
        Completed:&nbsp;
        <input
          type="checkbox"
          name="completed"
          id="completed"
          className="text-slate-900 accent-current w-5 h-5"
        />
      </label>
      <button className="btn-primary md:text-lg" type="submit">
        Create
      </button>
      <button
        onClick={closeModal}
        className="absolute top-2 right-2 xl:top-3 xl:right-3"
        type="button"
      >
        <CloseIcon width={20} height={20} className="fill-black" />
      </button>
    </form>
  );
};

export default AddTodoForm;

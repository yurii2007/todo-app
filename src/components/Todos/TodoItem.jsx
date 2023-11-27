import { useState } from "react";
import { useDispatch } from "react-redux";

import { deleteTodo, updateTodo } from "../../redux/todoSlice.js/operations";

import { ReactComponent as EditButton } from "../../images/svg/edit_icon.svg";
import { ReactComponent as DeleteButton } from "../../images/svg/delete_icon.svg";
import { ReactComponent as CheckMark } from "../../images/svg/checkmark.svg";

const TodoItem = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [todoData, setTodoData] = useState({
    completed: todo.completed,
    title: todo.title,
  });
  const dispatch = useDispatch();

  const editButtonClick = () => {
    // set edit mode or update todo after editing
    if (!isEditing) return setIsEditing(true);
    dispatch(updateTodo({ ...todo, ...todoData }));
    setIsEditing(false);
  };

  const completedButtonClick = () => {
    if (!isEditing) return;
    setTodoData((prevData) => ({ ...prevData, completed: !prevData.completed }));
  };

  const deleteButtonClick = () => dispatch(deleteTodo(todo.id));

  return (
    <li className="px-5 py-3 bg-white text-slate-950 flex flex-col gap-2 w-[274px] md:w-[600px]">
      <div className="flex gap-2 items-center">
        <p className="secondary-text">Title: &nbsp;</p>
        <input
          value={todoData.title}
          readOnly={!isEditing}
          onChange={(e) =>
            setTodoData((prevData) => ({ ...prevData, title: e.target.value }))
          }
          className="focus-within:outline-none text-sm md:text-base"
        />
      </div>
      <div className="flex gap-2">
        <p className="secondary-text">Status: &nbsp;</p>
        <span
          onClick={completedButtonClick}
          className={`${
            todoData.completed ? "bg-green-600" : "bg-red-600"
          } inline-block w-[25px] h-[25px] rounded-full`}
        ></span>
      </div>
      <div className="flex gap-3 justify-end">
        <button onClick={editButtonClick} className="group" type="button">
          {isEditing ? (
            <CheckMark
              width={30}
              height={30}
              className="fill-gray-600 group-hover:fill-gray-900 group-focus:fill-gray-900"
            />
          ) : (
            <EditButton
              width={30}
              height={30}
              className="fill-gray-600 group-hover:fill-gray-900 group-focus:fill-gray-900"
            />
          )}
        </button>
        <button onClick={deleteButtonClick} className="group" type="button">
          <DeleteButton
            width={30}
            height={30}
            className="fill-red-600 group-hover:fill-red-950 group-focus:fill-red-950"
          />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;

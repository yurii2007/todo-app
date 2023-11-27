import { useState } from "react";
import { useDispatch } from "react-redux";

import { updateTodo } from "../../redux/todoSlice.js/operations";

import { ReactComponent as EditButton } from "../../images/svg/edit_icon.svg";

const TodoItem = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [todoData, setTodoData] = useState({
    completed: todo.completed,
    title: todo.title,
  });
  const dispatch = useDispatch();

  const editButtonClick = () => {
    if (!isEditing) return setIsEditing(true);
    dispatch(updateTodo({ ...todo, ...todoData }));
    setIsEditing(false);
  };

  const completedButtonClick = () => {
    if (!isEditing) return;
    setTodoData((prevData) => ({ ...prevData, completed: !prevData.completed }));
  };

  return (
    <li className="p-2 bg-slate-950">
      <input
        value={todoData.title}
        readOnly={!isEditing}
        onChange={(e) =>
          setTodoData((prevData) => ({ ...prevData, title: e.target.value }))
        }
      />
      <div
        onClick={completedButtonClick}
        className={`${
          todoData.completed ? "bg-green-600" : "bg-red-600"
        } w-[40px] h-[40px] rounded-full`}
      ></div>
      <button onClick={editButtonClick} type="submit">
        <EditButton width={30} height={30} />
      </button>
    </li>
  );
};

export default TodoItem;

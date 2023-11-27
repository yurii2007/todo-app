import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { selectTodos } from "../redux/selectors";
import { getTodos } from "../redux/todoSlice.js/operations";

const GetStartedBtn = () => {
  const todos = useSelector(selectTodos);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getStartedClick = () => {
    // if todo in store already exist don't fetch new
    if (todos.length === 0) dispatch(getTodos());

    navigate("/todos");
  };

  return (
    <button onClick={getStartedClick} className="btn-primary" type="button">
      Get Started
    </button>
  );
};

export default GetStartedBtn;

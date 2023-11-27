import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getTodos } from "../redux/todoSlice.js/operations";

import Header from "./Header/Header"

const SharedLayout = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getTodos());
  };
  return (
    <>
    <Header />
      <button
        onClick={handleClick}
        className="mb-[100px] bg-black text-white p-3"
        type="button"
      >
        get Todos
      </button>
      <Suspense fallback={<div>Loading</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;

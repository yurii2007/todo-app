import { Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { selectIsLoading } from "../redux/selectors";
import { getTodos } from "../redux/todoSlice.js/operations";

import Header from "./Header/Header";
import Loader from "./Loader";

const SharedLayout = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    (() => {
      dispatch(getTodos());
    })();
  },[dispatch]);

  return (
    <>
      <Header />
      <main className="px-4 md:px-5 xl:px-8">
        {isLoading && <Loader />}
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;

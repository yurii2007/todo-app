import { Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { selectError, selectIsLoading } from "../redux/selectors";
import { getTodos } from "../redux/todoSlice.js/operations";

import Header from "./Header/Header";
import Loader from "./Loader";
import Error from "./Error";

const SharedLayout = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    // fetch todos when app is launching
    (() => {
      dispatch(getTodos());
    })();
  }, [dispatch]);

  return (
    <>
      <Header />
      {error && <Error message={error} />}
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

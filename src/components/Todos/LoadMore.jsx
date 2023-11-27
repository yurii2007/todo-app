import { useState } from "react";
import { useDispatch } from "react-redux";

import { getTodosByPage } from "../../redux/todoSlice.js/operations";

const LoadMore = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const dispatch = useDispatch();

  const onLoadMoreClick = () => {
    dispatch(
      getTodosByPage({
        start: currentPage + 1,
        limit: 5,
      })
    );
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <button onClick={onLoadMoreClick} className="btn-primary mx-auto" type="button">
      Load More
    </button>
  );
};

export default LoadMore;

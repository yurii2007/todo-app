import { useState } from "react";
import { useDispatch } from "react-redux";

import { getTodosByPage } from "../../redux/todoSlice.js/operations";

const PaginationBtn = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const dispatch = useDispatch();

  const onPaginationClick = (direction) => {
    // check by direction next page
    dispatch(
      getTodosByPage({
        start: direction === 1 ? currentPage + 1 : currentPage - 1,
        limit: 5,
      })
    );
    setCurrentPage((prevPage) => (direction === 1 ? prevPage + 1 : prevPage - 1));
  };

  return (
    <div className="flex gap-4">
      <button
        onClick={() => onPaginationClick(-1)}
        className="btn-primary mx-auto"
        type="button"
        disabled={currentPage < 1}
      >
        Prev Page
      </button>
      <button
        onClick={() => onPaginationClick(1)}
        className="btn-primary mx-auto"
        type="button"
        disabled={currentPage > 3}
      >
        Next page
      </button>
    </div>
  );
};

export default PaginationBtn;

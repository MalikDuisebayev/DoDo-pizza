import React from "react";

import ReactPaginate from "react-paginate";
import classes from "./Pagination.module.scss";

const Pagination = ({ onChangePage }) => {
  return (
    <div className={classes.home}>
      <ReactPaginate
        className={classes.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;

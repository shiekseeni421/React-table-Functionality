import React, { useState } from "react";
import ReactPaginate from "react-paginate";

export default function Pagination({ data, pageChange }) {
  const handlePageChange = (page) => {
    pageChange(page);
  };

  return (
    <>
      <ReactPaginate
        previousLabel={"PREV"}
        nextLabel={"NEXT"}
        breakLabel={"..."}
        pageCount={data.length / 10}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        onPageChange={handlePageChange}
        containerClassName="pagination justify-content-center"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        activeClassName="active"
      />
    </>
  );
}

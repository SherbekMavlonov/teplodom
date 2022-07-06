import React from "react";
import ReactPaginate from "react-paginate";
import leftArrow from "../../assets/pagination/left-arrow.png";
import rightArrow from "../../assets/pagination/right-arrow.png";
import Wrapper from "./styles";

// Component

//
export interface IPaginateProps {
  initialPage?: number;
  marginPagesDisplayed?: number;
  pageCount: number;
  pageRangeDisplayed?: number;
  onChange: ({ selected }: { selected: number }) => void;
}

const Pagination: React.FC<IPaginateProps> = ({
  initialPage,
  marginPagesDisplayed,
  pageCount,
  pageRangeDisplayed,
  onChange,
}) => {
  return (
    <Wrapper>
      <ReactPaginate
        initialPage={initialPage}
        marginPagesDisplayed={marginPagesDisplayed}
        pageCount={pageCount}
        onPageChange={onChange}
        pageRangeDisplayed={pageRangeDisplayed}
        containerClassName="Pagination"
        activeClassName="Pagination__active"
        pageLinkClassName="Paginate__page-link"
        breakLinkClassName="Pagination__break-link"
        nextLinkClassName="Pagination__next-link"
        previousLinkClassName="Pagination__previous-link"
        pageClassName="Pagination__page-item"
        breakClassName="Pagination__break-item"
        nextClassName="Pagination__next-item"
        previousClassName="Pagination__previous-item"
        previousLabel={
          <>
            <img src={leftArrow} alt="" className=" Pagination__arrow " />
          </>
        }
        nextLabel={
          <>
            <img src={rightArrow} alt="" className=" Pagination__arrow " />
          </>
        }
      />
    </Wrapper>
  );
};
export default Pagination;

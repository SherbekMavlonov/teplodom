import React, { useState } from "react";
// import ReactPaginate from "react-paginate";
// import leftArrow from "../../assets/pagination/left-arrow.png";
// import rightArrow from "../../assets/pagination/right-arrow.png";
import { Wrapper } from "./styles";
import { isNaN } from "lodash";
import { isEmpty } from "lodash";
import { useLocation, useNavigate } from "react-router-dom";

// Component
import ProductWrap from "../../components/product";
import Pagination from "../../components/pagination";
// //
// export interface IPaginateProps {
//   initialPage?: number;
//   marginPagesDisplayed?: number;
//   pageCount: number;
//   pageRangeDisplayed?: number;
//   onChange: ({ selected }: { selected: number }) => void;
// }

const New: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pageNumber = !isNaN(+location.search.split("=")[1])
    ? Number(location.search.split("=")[1])
    : 1;
  const [products, setProducts] = useState([1, 2, 3, 4, 5]);
  const [currentPage, setCurrentPage] = useState(Number(pageNumber));

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected + 1);
    navigate(`?page=${selected + 1}`);
  };
  //

  const handleChange = () => {};
  return (
    <Wrapper>
      <h1 className="mt-5"></h1>
      {!isEmpty(products) ? (
        <>
          <Pagination
            initialPage={pageNumber - 1}
            pageCount={10}
            onChange={handlePageChange}
          />
        </>
      ) : (
        <div> Paginate warning </div>
      )}
    </Wrapper>
  );
};
export default New;

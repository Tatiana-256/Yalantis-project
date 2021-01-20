import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Page, PageWrap } from "./Pagination-style";
import {
  useFilteredProducts,
  useFiltersSelector,
} from "../../state/redux/state-selectors";
import { setProducts } from "../../state/redux/prosuctSlice";
import { setPageOptions } from "../../state/redux/filterSlise";
import { Button, Option } from "../../common-utils/common-styles";
import filtersAPI from "../../API-Requests/filters-API";

interface IProps {
  currentPage: number;
}

const Pagination: React.FC<IProps> = ({ currentPage = 1 }) => {
  const dispatch = useDispatch();

  const {
    perPage,
    ProductsTotalCount,
    maxPrice,
    minPrice,
  } = useFiltersSelector();

  const origins = useFilteredProducts().join();

  const [value, setValue] = useState(perPage);

  const placeholder = Math.ceil(ProductsTotalCount / perPage);
  const pages = [];
  for (let i = 1; i <= placeholder; i += 1) {
    pages.push(i);
  }

  const numberPages = 5;

  const showArrowRight = Math.ceil(placeholder / numberPages);
  const [portionNumber, setPortionNumber] = useState(1);
  const leftPortionPageNumber = (portionNumber - 1) * numberPages + 1;
  const rightPortionPageNumber = portionNumber * numberPages;

  const setNewPage = (productsCount: number, pageNumber?: number) => {
    filtersAPI
      .loadFiltersProducts(
        origins,
        minPrice,
        maxPrice,
        productsCount,
        pageNumber
      )
      .then((data) => {
        console.log(data);
        if (typeof data !== "string") {
          console.log(data);

          dispatch(setProducts(data.data.items));
          dispatch(
            setPageOptions({
              page: data.data.page,
              perPage: data.data.perPage,
              totalItems: data.data.totalItems,
            })
          );
        }
      });
  };

  const handlerChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue(Number(e.target.value));
    setNewPage(Number(e.target.value));
  };

  const onPageChange = (p: number) => {
    setNewPage(value, p);
  };

  return (
    <PageWrap>
      <div style={{ display: "flex", flexDirection: "column" }}>
        Products per page:
        <Option value={value} onChange={handlerChange} width="70px">
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </Option>
      </div>
      <div>
        {portionNumber > 1 && (
          <Button
            width="50px"
            height="30px"
            onClick={() => setPortionNumber(portionNumber - 1)}
          >
            {" "}
            «{" "}
          </Button>
        )}
        {pages
          .filter(
            (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
          )
          .map((p, index) => (
            <Page
              key={Math.random().toString()}
              onClick={() => onPageChange(p)}
            >
              {p}
            </Page>
          ))}
        {showArrowRight > portionNumber && (
          <Button
            width="50px"
            height="30px"
            onClick={() => setPortionNumber(portionNumber + 1)}
          >
            {" "}
            »{" "}
          </Button>
        )}
      </div>
    </PageWrap>
  );
};

export default Pagination;

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
};

// {/*<Page>{currentPage}</Page>*/}
// {/*<Page backGround="white" textColor="black" borderColor="#363b4d">*/}
// {/*  {currentPage}*/}
// {/*</Page>*/}

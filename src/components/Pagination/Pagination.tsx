import React, { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Page, PageWrap } from "./Pagination-style";
import {
  useFiltersSelector,
  useProductsSelector,
} from "../../state/redux/state-selectors";
import { setProducts, setStatus } from "../../state/redux/prosuctSlice";
import { selectCountries, setPageOptions } from "../../state/redux/filterSlise";
import { Button, Option } from "../../common-utils/common-styles";
import filtersAPI from "../../API-Requests/filters-API";

interface IProps {
  currentPage: number;
}

const Pagination: React.FC<IProps> = ({ currentPage = 1 }) => {
  const dispatch = useDispatch();

  const {
    page,
    perPage,
    ProductsTotalCount,
    maxPrice,
    minPrice,
  } = useFiltersSelector();
  const { status } = useProductsSelector();

  const origins = useSelector(selectCountries);

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
    dispatch(setStatus("loading"));
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

          dispatch(setProducts(data.items));
          dispatch(
            setPageOptions({
              page: data.page,
              perPage: data.perPage,
              totalItems: data.totalItems,
            })
          );
          dispatch(setStatus("succeeded"));
        } else if (data === "error") dispatch(setStatus("failed"));
      });
  };

  const handlerChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue(Number(e.target.value));
    setNewPage(Number(e.target.value));
  };

  const onPageChange = (p: number) => {
    setNewPage(value, p);
  };

  if (status === "loading") return <div>loading...</div>;

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
              prop={
                page !== p
                  ? {
                      backGround: "white",
                      textColor: "black",
                      borderColor: "#363b4d",
                    }
                  : {}
              }
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

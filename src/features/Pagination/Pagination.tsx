import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Page, PageWrap } from "./PaginationStyles";
import {
  selectCountries,
  selectProducts,
} from "../../store/redux/state-selectors";
import { Button, Option } from "../../utils/common-styles";
import { usePageOptions } from "./pagination.utils";
import { loadProducts } from "../../store/redux/slices/productSlice";
import { getURL } from "../../utils/url.utils.";

interface IProps {
  isEditable?: "true" | "false";
}

const Pagination: React.FC<IProps> = ({ isEditable }) => {
  const dispatch = useDispatch();

  const {
    status,
    page,
    perPage,
    ProductsTotalCount,
    maxPrice,
    minPrice,
  } = useSelector(selectProducts);
  const origins = useSelector(selectCountries);

  const [value, setValue] = useState<number | undefined>(perPage);
  const [valuePage, setValuePage] = useState<number>();
  const [portionNumber, setPortionNumber] = useState<number>(1);

  const {
    pages,
    rightPortionPageNumber,
    leftPortionPageNumber,
    showArrowRight,
  } = usePageOptions(perPage, ProductsTotalCount, portionNumber);

  useEffect(() => {
    // const { maxPrice, minPrice, origins, page, perPage } = getURL(location);

    dispatch(
      loadProducts({})
      //   {
      //   origins,
      //   minPrice,
      //   maxPrice,
      //   pageCount: perPage,
      //   page,
      // }
    );
    // eslint-disable-next-line  react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    setValuePage(1);
    setPortionNumber(1);
  }, [perPage, ProductsTotalCount]);

  const setProductsCount = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(
      loadProducts({
        origins,
        minPrice,
        maxPrice,
        pageCount: Number(e.target.value),
        page: valuePage,
        editable: isEditable,
      })
    );
  };

  const setProductPage = (p: number) => {
    setValuePage(p);
    dispatch(
      loadProducts({
        origins,
        minPrice,
        maxPrice,
        pageCount: value,
        page: p,
        editable: isEditable,
      })
    );
  };

  if (status === "loading") return <div>loading...</div>;

  return (
    <PageWrap>
      <div style={{ display: "flex", flexDirection: "column" }}>
        Products per page:
        <Option value={value} onChange={setProductsCount} width="70px">
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
          .map((p) => (
            <Page
              key={Math.random().toString()}
              onClick={() => setProductPage(p)}
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

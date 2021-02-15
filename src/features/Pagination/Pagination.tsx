import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import { Page, PageWrap } from "./PaginationStyles";
import {
  selectCountries,
  selectProducts,
} from "../../store/redux/state-selectors";
import { Button, Option } from "../../utils/common-styles";
import { usePageOptions } from "./pagination.utils";
import { loadProducts } from "../../store/redux/slices/productSlice";
import { getURL } from "../../utils/url.utils.";
import { IFilterParameters } from "../../store/common/entitiesTypes";

interface IProps {
  isEditable?: "true" | "false";
}

const Pagination: React.FC<IProps> = ({ isEditable }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

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
    const filterParameters: IFilterParameters = getURL(location);
    dispatch(
      loadProducts({
        products: filterParameters,
        history,
        location: location.search,
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    setValuePage(1);
    setPortionNumber(1);
  }, [perPage, ProductsTotalCount]);

  const setProductsCount = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(
      loadProducts({
        products: {
          origins,
          minPrice,
          maxPrice,
          perPage: Number(e.target.value),
          page: valuePage,
          editable: isEditable,
        },
        history,
        location: location.search,
      })
    );
  };

  const setProductPage = (p: number) => {
    setValuePage(p);
    dispatch(
      loadProducts({
        products: {
          origins,
          minPrice,
          maxPrice,
          perPage: value,
          page: p,
          editable: isEditable,
        },
        history,
        location: location.search,
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

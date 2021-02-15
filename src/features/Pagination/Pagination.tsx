import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import qs from "query-string";

import { Page, PageWrap } from "./PaginationStyles";
import {
  selectCountries,
  selectProducts,
} from "../../store/redux/state-selectors";
import { Button, Option } from "../../utils/common-styles";
import { usePageOptions } from "./pagination.utils";
import { loadProducts } from "../../store/redux/slices/productSlice";
import { getURL, putURL } from "../../utils/url.utils.";
import { IFilterParameters } from "../../store/common/entitiesTypes";

interface IProps {
  isEditable?: "true" | "false";
}

const Pagination: React.FC<IProps> = ({ isEditable }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  // _________________ state selectors _________________

  const {
    status,
    page,
    perPage,
    ProductsTotalCount,
    maxPrice,
    minPrice,
  } = useSelector(selectProducts);
  const origins = useSelector(selectCountries);

  // _________________ local state _________________
  const [value, setValue] = useState<number | undefined>(perPage);
  const [valuePage, setValuePage] = useState<number>();
  const [portionNumber, setPortionNumber] = useState<number>(1);

  // ______________ get page settings ________________
  const {
    pages,
    rightPortionPageNumber,
    leftPortionPageNumber,
    showArrowRight,
  } = usePageOptions(perPage, ProductsTotalCount, portionNumber);

  // ______________ get url parameters ________________
  const filterParameters: IFilterParameters = getURL(location);

  // ________________ first page rendering _______________
  useEffect(() => {
    dispatch(loadProducts(filterParameters));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    setValuePage(1);
    setPortionNumber(1);
  }, [valuePage, ProductsTotalCount]);

  // _________ change number of products at page ________
  const setProductsCount = (e: ChangeEvent<HTMLSelectElement>) => {
    // _______________ url settings ________________
    const url = putURL(
      origins,
      minPrice,
      maxPrice,
      valuePage,
      Number(e.target.value),
      location.search
    );
    history.push(`/products?${qs.stringify(url)}`);
    setValue(Number(e.target.value));

    // _________________ sent request ____________________
    dispatch(
      loadProducts({
        origins,
        minPrice,
        maxPrice,
        perPage: Number(e.target.value),
        page: valuePage,
        editable: isEditable,
      })
    );
  };

  const setProductPage = (p: number) => {
    // _______________ url settings ________________
    const url = putURL(origins, minPrice, maxPrice, value, p, location.search);
    history.push(`/products?${qs.stringify(url)}`);

    setValuePage(p);

    // _________________ sent request ____________________
    dispatch(
      loadProducts({
        origins,
        minPrice,
        maxPrice,
        perPage,
        page: p,
        editable: isEditable,
      })
    );
  };

  if (status === "loading") return <div>loading...</div>;
  if (status === "rejected") return <div>something wrong :( </div>;

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

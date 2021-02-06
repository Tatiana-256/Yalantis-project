import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Page, PageWrap } from "./PaginationStyles";
import {
  selectFilters,
  selectProducts,
} from "../../store/redux/state-selectors";
import { selectCountries } from "../../store/redux/slices/filterSlice";
import { Button, Option } from "../../utils/common-styles";
import { usePageOptions } from "./pagination.utils";
import { loadFilteredProducts } from "../../store/redux/thunk-creators";

interface IProps {
  isEditable?: "true" | "false";
}

const Pagination: React.FC<IProps> = ({ isEditable }) => {
  const dispatch = useDispatch();

  const { page, perPage, ProductsTotalCount, maxPrice, minPrice } = useSelector(
    selectFilters
  );
  const { status } = useSelector(selectProducts);
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
    dispatch(
      loadFilteredProducts({
        origins,
        minPrice,
        maxPrice,
        pageCount: value,
        page: valuePage,
        editable: isEditable,
      })
    );
  }, [
    dispatch,
    value,
    page,
    maxPrice,
    minPrice,
    origins,
    valuePage,
    isEditable,
  ]);

  useEffect(() => {
    setValuePage(1);
    setPortionNumber(1);
  }, [value]);

  const handlerChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue(Number(e.target.value));
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
          .map((p) => (
            <Page
              key={Math.random().toString()}
              onClick={() => setValuePage(p)}
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

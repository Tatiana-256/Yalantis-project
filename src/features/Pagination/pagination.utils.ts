import { useSelector } from "react-redux";
import { selectProducts } from "../../store/redux/state-selectors";

export const usePageOptions = (
  perPageURL: number,
  ProductsTotalCountURL: number,
  portionNumber: number
) => {
  const { perPage, ProductsTotalCount } = useSelector(selectProducts);
  const placeholder = Math.ceil(ProductsTotalCount / perPage);

  const pages = [];
  for (let i = 1; i <= placeholder; i += 1) {
    pages.push(i);
  }

  const numberPages = 5;
  const showArrowRight = Math.ceil(placeholder / numberPages);
  const leftPortionPageNumber = (portionNumber - 1) * numberPages + 1;
  const rightPortionPageNumber = portionNumber * numberPages;

  return {
    pages,
    showArrowRight,
    leftPortionPageNumber,
    rightPortionPageNumber,
  };
};

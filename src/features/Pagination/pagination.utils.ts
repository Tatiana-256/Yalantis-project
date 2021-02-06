export const usePageOptions = (
  perPage: number,
  ProductsTotalCount: number,
  portionNumber: number
) => {
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

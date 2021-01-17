import React from "react";
import PropTypes from "prop-types";
import { Page, PageWrap } from "./Pagination-style";

interface IProps {
  currentPage: number;
}

const Pagination: React.FC<IProps> = ({ currentPage = 1 }) => {
  return (
    <PageWrap>
      <Page>{currentPage}</Page>
      <Page backGround="white" textColor="black" borderColor="#363b4d">
        {currentPage}
      </Page>
    </PageWrap>
  );
};

export default Pagination;

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
};

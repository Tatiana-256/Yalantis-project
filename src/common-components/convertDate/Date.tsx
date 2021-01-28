import React from "react";
import { getMonth } from "../../common-utils/dataGenerator";

interface IProps {
  date: string;
}

export const Date: React.FC<IProps> = ({ date }) => {
  const year = date.slice(0, 4);
  const month = getMonth(date);
  const day = date.slice(8, 10);

  const searchDate = `${day} ${month}, ${year}`;

  return <div style={{ width: "100%", padding: "1% 0" }}>{searchDate}</div>;
};

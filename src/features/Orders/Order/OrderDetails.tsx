import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { IOrder, showDetails } from "../../../store/redux/slices/ordersSlice";
import { selectOrder } from "../../../store/redux/state-selectors";
import { DetailWrap, OrderWrap } from "./OrderDetailsStyles";
import { Date } from "../../../components/convertDate/Date";
import { TotalWrap } from "../../Bag/BagStyles";

interface MatchParams {
  id: string;
}

export const OrderDetails = ({ match }: RouteComponentProps<MatchParams>) => {
  const orderId = match.params.id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showDetails(orderId));
  }, [dispatch, orderId]);

  const order: IOrder = useSelector(selectOrder);

  const total = order.pieces.reduce((acc, val) => {
    return acc + val.product.price * val.count;
  }, 0);

  return (
    <OrderWrap>
      <h2>
        Your order created:
        <Date date={order.createdAt} />
      </h2>
      <div>
        {order.pieces.map((item) => (
          <DetailWrap>
            <div>
              <h3>Name:</h3>
              {item.product.name}
            </div>
            <div>
              <h3> Price: </h3>
              {item.product.price} $
            </div>
            <div>
              <h3> Origin: </h3>
              {item.product.origin}
            </div>
            <div>
              <h3>Count: </h3>
              {item.count}
            </div>
          </DetailWrap>
        ))}
      </div>
      <TotalWrap>
        <h3>Total sum: {total} $</h3>
      </TotalWrap>
    </OrderWrap>
  );
};

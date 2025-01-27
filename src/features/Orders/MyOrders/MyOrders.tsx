import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { Button } from "../../../utils/common-styles";
import { getOrders } from "../../../store/redux/slices/ordersSlice";
import { selectOrders } from "../../../store/redux/state-selectors";
import { OrdersWrap, ProductWrap } from "./MyOrdersStyle";
import { OrderInfo } from "./OprdersInfo";
import { IOrder } from "../../../store/common/entitiesTypes";
import { uniqueID } from "../../../utils/dataGenerator";

export const MyOrders = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { orders, status } = useSelector(selectOrders);

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  if (status === "loading") {
    return <div>...loading</div>;
  }
  if (status === "rejected") {
    return <div>something wrong :( </div>;
  }

  if (!orders) {
    return <div>No orders</div>;
  }

  return (
    <div>
      <h1
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100vw",
        }}
      >
        My orders
      </h1>
      {orders.map((order: IOrder) => (
        <OrdersWrap key={uniqueID()}>
          <div>
            <div>Your order created at:</div>
            <div> {order.createdAt}</div>
          </div>
          <ProductWrap>
            {order.pieces.map((prod) => (
              <OrderInfo product={prod.product} key={uniqueID()} />
            ))}
          </ProductWrap>
          <Button
            height="40px"
            width="200px"
            onClick={() => history.push(`/orders/${order.id}`)}
          >
            Show details
          </Button>
        </OrdersWrap>
      ))}
    </div>
  );
};

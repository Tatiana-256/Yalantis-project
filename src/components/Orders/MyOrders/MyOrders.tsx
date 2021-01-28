import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { Button } from "../../../common-utils/common-styles";
import { getOrders, IOrder } from "../../../state/redux/slices/ordersSlice";
import { selectOrders } from "../../../state/redux/state-selectors";
import { OrdersWrap, ProductWrap } from "./MyOrders-style";
import { OrderInfo } from "./OprdersInfo";

export const MyOrders = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const orders = useSelector(selectOrders);
  console.log(orders);

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  if (!orders.orders) {
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
      {orders.orders.map((order: IOrder) => (
        <OrdersWrap>
          <div>
            <div>Your order created at:</div>
            <div>{order.createdAt}</div>
          </div>
          <ProductWrap>
            {order.pieces.map((prod) => (
              // <OrderDetails product={prod.product} />
              <OrderInfo product={prod.product} />
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

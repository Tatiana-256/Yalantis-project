import React from "react";
import "./App.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Navigation } from "./features/Navigation/Navigation";
import { Error404 } from "./features/Error/Error";
import { Products } from "./features/Products/Products";
import ProductPage from "./features/Products/ProductPage/ProductPage";
import { Bag } from "./features/Bag/Bag";
import { MyProducts } from "./features/MyProducts/MyProducts";
import { MyOrders } from "./features/Orders/MyOrders/MyOrders";
import { OrderDetails } from "./features/Orders/Order/OrderDetails";
import { FilterForm } from "./features/Filters/FiltersForm";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Redirect to="/products" />
        </Route>
        <Route exact path="/products" component={Products} />
        <Route exact path="/myProducts" component={MyProducts} />
        <Route exact path="/products/:id" component={ProductPage} />
        <Route exact path="/myOrders" component={MyOrders} />
        <Route exact path="/orders/:id" component={OrderDetails} />
        <Route exact path="/bag" component={Bag} />
        <Route exact path="/FilterForm" component={FilterForm} />
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

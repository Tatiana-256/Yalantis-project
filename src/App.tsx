import React from "react";
import "./App.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Navigation } from "./components/Navigation/Navigation";
import { Error404 } from "./components/Error/Error";
import { Products } from "./components/Products/Products";
import ProductPage from "./components/Products/ProductPage/ProductPage";
import { Bag } from "./components/Bag/Bag";
import { MyProducts } from "./components/MyProducts/MyProducts";
import { MyOrders } from "./components/Orders/MyOrders/MyOrders";
import { OrderDetails } from "./components/Orders/Order/OrderDetails";

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
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

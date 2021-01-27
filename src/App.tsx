import React from "react";
import "./App.css";
import { useSelector } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import { RootState } from "./state/redux/redux-store";
import { Navigation } from "./components/Navigation/Navigation";
import { Error404 } from "./components/Error/Error";
import { Products } from "./components/Products/Products";
import ProductPage from "./components/Products/ProductPage/ProductPage";
import { Bag } from "./components/Bag/Bag";
import { AddProduct } from "./components/AddProduct/AddProduct";
import { MyProducts } from "./components/MyProducts/MyProducts";

function App() {
  const { open } = useSelector((state: RootState) => state.ui);

  return (
    <BrowserRouter>
      <Navigation />
      {open && <AddProduct />}
      <Switch>
        <Route exact path="/">
          <Redirect to="/products" />
        </Route>
        <Route exact path="/products" component={Products} />
        <Route exact path="/myProducts" component={MyProducts} />
        <Route exact path="/products/:id" component={ProductPage} />
        <Route exact path="/bag" component={Bag} />
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

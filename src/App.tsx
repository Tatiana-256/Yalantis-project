import React from 'react';
import './App.css';
import {
    BrowserRouter,
    Route,
    Switch,
} from "react-router-dom";
import {Navigation} from "./components/Navigation/Navigation";
import {Error404} from './components/Error/Error';
import {Products} from './components/Products/Products';
import {ProductPage} from "./components/Products/ProductPage/ProductPage";
import {Bag} from './components/Bag/Bag';

function App() {
    return (
        <BrowserRouter>
            <Navigation/>
            <Switch>
                <Route exact path={"/products"} component={Products}/>
                <Route exact path={"/products/:id"} component={ProductPage}/>
                <Route exact path={"/bag"} component={Bag}/>
                <Route path="*">
                    <Error404/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;

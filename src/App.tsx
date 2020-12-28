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

function App() {
    return (
        <BrowserRouter>
            <Navigation/>
            <Switch>
                <Route path="/">
                    <Products/>
                </Route>
                <Route path="*">
                    <Error404/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;

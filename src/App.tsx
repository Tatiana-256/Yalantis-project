import React from 'react';
import './App.css';
import {
    BrowserRouter,
    Route,
    Switch,
} from "react-router-dom";
import {Navigation} from "./components/Navigation/Navigation";
import {Error404} from './components/Error/Error';

function App() {
    return (
        <BrowserRouter>
            <Navigation/>
            <Switch>
                <Route path="/">
                    <div>Main page</div>
                </Route>
                <Route path="*">
                    <Error404/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;

import React from 'react';
import {Switch, Route} from "react-router-dom";
import Layout from "./layouts/Index.js";
import Counter from "./components/Counter.js";


const Routes = () => {
    return (
    <Switch>
        <Route exact path="/" component={Layout} />
		<Route exact path="/login" component={Layout} />
        <Route exact path="/account" component={Layout} />
		<Route exact path="/counter" component={Counter} />
    </Switch>
    )
}

export default Routes;
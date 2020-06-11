import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import HomeScreen from "./HomeScreen";
import ProductScreen from "./ProductScreen";

const Main = () => (
  <Switch>
        <Route exact path='/' component={HomeScreen} />
        <Route path='/product/:id' component={ProductScreen}/>
  </Switch>
);
export default Main;

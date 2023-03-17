import React from "react";
import { Home } from "../pages";
import { RouterHelper } from "./route";
import { Switch, Route, BrowserRouter } from 'react-router-dom';


const DynamicRoute = ({component : Component, ...rest}) =>{
    return (
        <>
            <Route
            {...rest}
            render={props => (
                <Component {...props} />
            )}
            />
        </>
    )
}

export default () => (
    <BrowserRouter>
        <Switch>
            <DynamicRoute exact path={RouterHelper.Home.path} component={Home}/>
        </Switch>
    </BrowserRouter>
)
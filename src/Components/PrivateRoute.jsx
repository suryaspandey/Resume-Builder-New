// PrivateRoute.js
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { auth } from "../firebase";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { currentUser } = auth();

    return (
        <Route
            {...rest}
            render={(props) =>
                currentUser ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
};

export default PrivateRoute;

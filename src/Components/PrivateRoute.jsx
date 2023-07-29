// PrivateRoute.js
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { auth } from "../firebase";
// import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { currentUser } = auth;
    console.log(currentUser);

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

// const PrivateRoute = ({ currentUser, children }) => {
//     if (!!currentUser) {
//         return <Redirect to="/" replace />;
//     }
//     return children;
// };

export default PrivateRoute;

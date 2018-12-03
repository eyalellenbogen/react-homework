import React from 'react';
import { Redirect } from 'react-router-dom';
function withAuthGuard(WrappedComponent, getIsLoggedIn, redirectTo) {
    return function (props) {
        if (getIsLoggedIn()) {
            return (<WrappedComponent {...props}></WrappedComponent>);
        }
        return (
            <Redirect to={redirectTo}></Redirect>
        );
    }
}

export default withAuthGuard;
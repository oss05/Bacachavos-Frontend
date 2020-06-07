import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { login } from '../actions/authActions';

const PrivateRoute = ({ component: Component, restricted, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      localStorage.getItem('token')
        ? <Component {...props} />
        : <Redirect to="/auth/login" />
    )}
  />
);
export default PrivateRoute;

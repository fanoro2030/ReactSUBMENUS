// routes/privateRoutes/index.jsx

import React from 'react';
import { Route } from 'react-router-dom';
import DashboardLayout from '../../Layouts/DashboardLayout';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <DashboardLayout>
        <Component {...props} />
      </DashboardLayout>
    )}
  />
);

export default PrivateRoute;

// routes/index.jsx

import React from 'react';
import { Switch } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes';
import PrivateRoute from './privateRoutes';
import PublicRoute from './publicRoutes';

const Routes = () => {
  return (
    <Switch>
      {publicRoutes.map((route, i) => (
        <PublicRoute
          key={i}
          {...route}
        />
      ))}
      {privateRoutes.map((route, i) => (
        <PrivateRoute
          key={i}
          {...route}
        />
      ))}
    </Switch>
  );
};

export default Routes;

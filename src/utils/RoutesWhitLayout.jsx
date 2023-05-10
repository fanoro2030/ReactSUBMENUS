/*import React from 'react';
import Spinner from '../../Global/Spinner';
import Routes from './Routes/Routes';
const RoutesWithLayout = ({ layout: Layout, routes, LayoutProps }) => {
  return (
    <Layout {...LayoutProps}>
      <React.Suspense fallback={<Spinner />}>
        <Routes routes={routes} />
      </React.Suspense>
    </Layout>
  );
};

export default RoutesWithLayout;*/
import { Route, Routes } from 'react-router-dom';

import DashboardLayout from '../Layouts/DashboardLayout';
import PageLandingLayout from '../Layouts/PageLandingLayout';
import Presentation from '../pages/PageLanding/Presentation';
import Main from '../pages/Dashboard/Main';
import NotFound from '../pages/NotFount';

const RoutesWithLayout = (props) => {
  return (
    <Routes>
      <Route
        exact
        path='/dashboard'
        render={() => (
          <DashboardLayout>
            <Main />
          </DashboardLayout>
        )}
      />
      <Route
        exact
        path='/presentation'
        render={() => (
          <PageLandingLayout>
            <Presentation />
          </PageLandingLayout>
        )}
      />
      <Route component={NotFound} />
    </Routes>
  );
};

export default RoutesWithLayout;

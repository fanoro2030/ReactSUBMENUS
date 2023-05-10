import { Route } from 'react-router-dom';
import PageLandingLayout from '../../Layouts/PageLandingLayout';
import Presentation from '../../pages/PageLanding/Presentation';

const publicRoutes = [
  {
    path: '/presentation',
    exact: true,
    component: PageLandingLayout(Presentation),
  },
];

const PublicRoutes = () => {
  return (
    <>
      {publicRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
        >
          {route.component}
        </Route>
      ))}
    </>
  );
};

export default PublicRoutes;

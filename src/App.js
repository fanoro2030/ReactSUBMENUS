import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RoutesWithLayout from './utils/RoutesWhitLayout';
import privateRoutes from './routes/privateRoutes';
import publicRoutes from './routes/publicRoutes';
function App() {
  return (
    <Routes>
      <Route>
        <RoutesWithLayout
          routes={publicRoutes}
          layout='PageLayout'
        />
        <RoutesWithLayout
          routes={privateRoutes}
          layout='DashboardLayout'
        />
      </Route>
    </Routes>
  );
}

export default App;

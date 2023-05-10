import DashboardLayout from '../../../Layouts/DashboardLayout';

import { privateRoutes } from '../../../utils/navigationData';

const Main = () => {
  return (
    <DashboardLayout routes={privateRoutes}>
      {/* Aquí colocarías todo el contenido de tu componente Presentation */}
      <h1>Presentation</h1>
    </DashboardLayout>
  );
};

export default Main;

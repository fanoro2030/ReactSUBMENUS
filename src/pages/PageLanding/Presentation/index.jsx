import PageLandingLayout from '../../../Layouts/PageLandingLayout';
import { publicRoutes } from '../../../utils/navigationData';

const Presentation = () => {
  return (
    <PageLandingLayout routes={publicRoutes}>
      {/* Aquí colocarías todo el contenido de tu componente Presentation */}
      <h1>Presentation</h1>
    </PageLandingLayout>
  );
};

export default Presentation;

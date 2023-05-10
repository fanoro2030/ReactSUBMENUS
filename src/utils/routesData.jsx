import { lazy } from 'react';
import { importPage } from '../../../../utils/utils';

const routesData = [
  {
    path: '/sobre-nosotros',
    component: lazy(() => importPage('PagesLandings', 'SobreNosotros')),
  },
  {
    path: '/nuestras-semillas',
    component: lazy(() => importPage('PagesLandings', 'NuestrasSemillas')),
    routes: [
      {
        path: '/catalogo',
        component: lazy(() => importPage('PagesLandings', 'Catalogo')),
      },
      {
        path: '/solagro-semillas',
        component: lazy(() => importPage('PagesLandings', 'SolagroSemillas')),
      },
    ],
  },
  {
    path: '/nuestros-servicios',
    component: lazy(() => importPage('PagesLandings', 'NuestrosServicios')),
    routes: [
      {
        path: '/asesoramiento',
        component: lazy(() => importPage('PagesLandings', 'Asesoramiento')),
      },
      {
        path: '/limpieza-y-seleccion',
        component: lazy(() => importPage('PagesLandings', 'LimpiezaSeleccion')),
      },
    ],
  },
  {
    path: '/contacto',
    component: lazy(() => importPage('PagesLandings', 'Contacto')),
  },
  {
    path: '/login',
    component: lazy(() => importPage('PagesLandings', 'Login')),
  },
];

export default routesData;

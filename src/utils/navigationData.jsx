import {
  Home as HomeIcon,
  Info as InfoIcon,
  LocalFlorist as LocalFloristIcon,
  Build as BuildIcon,
  ContactMail as ContactMailIcon,
  LockOpen as LockOpenIcon,
} from '@material-ui/icons';

export const publicRoutes = [
  {
    name: 'Presentación',
    icon: <InfoIcon />,
    url: '/presentation',
  },
  {
    name: 'Sobre Nosotros',
    icon: <InfoIcon />,
    url: '/sobre-nosotros',
  },
  {
    name: 'Nuestras Semillas',
    icon: <LocalFloristIcon />,
    url: '/nuestras-semillas',
    subRoutes: [
      {
        name: 'Catálogo',
        url: '/catalogo',
      },
      {
        name: 'Solagro Semillas',
        url: '/solagro-semillas',
      },
    ],
  },
  {
    name: 'Nuestros Servicios',
    icon: <BuildIcon />,
    url: '/nuestros-servicios',
    subRoutes: [
      {
        name: 'Asesoramiento',
        url: '/asesoramiento',
      },
      {
        name: 'Limpieza y Selección',
        url: '/limpieza-y-seleccion',
      },
    ],
  },
  {
    name: 'Contacto',
    icon: <ContactMailIcon />,
    url: '/contacto',
  },
  {
    name: 'Login',
    icon: <LockOpenIcon />,
    url: '/login',
  },
];

export const privateRoutes = [
  { name: 'Dashboard', icon: 'dashboard', url: '/dashboard' },
  {
    name: 'Gestion de Permisos',
    icon: 'vpn_key',
    url: '/permisos',
    subRoutes: [
      { name: 'Registrar Permiso', url: '/registrar-permiso', icon: 'add_box' },
      { name: 'Editar Permiso', url: '/editar-permiso/:id', icon: 'edit' },
      {
        name: 'Desactivar Permiso',
        url: '/desactivar-permiso/:id',
        icon: 'remove_circle',
      },
      {
        name: 'Reportes de Permisos',
        url: '/reportes-permisos',
        icon: 'description',
        subRoutes: [
          {
            name: 'Lista de Permisos Activos',
            url: '/permisos-activos',
            icon: 'check_circle',
          },
          {
            name: 'Lista de Permisos Inactivos',
            url: '/permisos-inactivos',
            icon: 'cancel',
          },
        ],
      },
      {
        name: 'Activar Permiso',
        url: '/activar-permiso/:id',
        icon: 'add_circle',
      },
    ],
  },
  {
    name: 'Gestion de Roles',
    icon: 'people',
    url: '/roles',
    subRoutes: [
      {
        name: 'Registrar Rol',
        url: '/registrar-rol',
        icon: 'add_box',
      },
      {
        name: 'Editar Rol',
        url: '/editar-rol/:id',
        icon: 'edit',
      },
      {
        name: 'Desactivar Rol',
        url: '/desactivar-rol/:id',
        icon: 'remove_circle',
      },
      {
        name: 'Reportes de Roles',
        url: '/reportes-roles',
        icon: 'description',
        subRoutes: [
          {
            name: 'Lista de Roles Activos',
            url: '/roles-activos',
            icon: 'check_circle',
          },
          {
            name: 'Lista de Roles Inactivos',
            url: '/roles-inactivos',
            icon: 'cancel',
          },
        ],
      },
      {
        name: 'Activar Rol',
        url: '/activar-rol/:id',
        icon: 'add_circle',
      },
    ],
  },
];
[
  {
    name: 'Gestion de Usuarios',
    icon: 'person',
    url: '/usuarios',
    subRoutes: [
      {
        name: 'Registrar Usuario',
        url: '/registrar-usuario',
        icon: 'add_box',
      },
      {
        name: 'Editar Usuario',
        url: '/editar-usuario/:id',
        icon: 'edit',
      },
      {
        name: 'Desactivar Usuario',
        url: '/desactivar-usuario/:id',
        icon: 'remove_circle',
      },
      {
        name: 'Reportes de Usuarios',
        url: '/reportes-usuarios',
        icon: 'description',
        subRoutes: [
          {
            name: 'Lista de Usuarios Activos',
            url: '/usuarios-activos',
            icon: 'check_circle',
          },
          {
            name: 'Lista de Usuarios Inactivos',
            url: '/usuarios-inactivos',
            icon: 'cancel',
          },
        ],
      },
      {
        name: 'Cambiar Contraseña',
        url: '/cambiar-contraseña/:id',
        icon: 'vpn_key',
      },
    ],
  },
];

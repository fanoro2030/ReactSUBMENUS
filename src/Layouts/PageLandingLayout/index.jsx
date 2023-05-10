import React, { useState } from 'react';
import CustomAppBar from '../../components/common/Appbar';
import SidebarNavigation from '../../components/common/Sidebar';

import useDrawer from '../../hooks/useDrawer';
import { useStyles } from './page_layout';
const PageLandingLayout = ({ children }) => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { handleDrawerOpen, handleDrawerClose } = useDrawer(setMobileOpen);

  return (
    <div className={classes.root}>
      <CustomAppBar
        position='right'
        handleDrawerToggle={handleDrawerOpen}
      />
      <SidebarNavigation
        open={mobileOpen}
        variant='temporary'
        handleDrawerClose={handleDrawerClose}
      />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};

export default PageLandingLayout;

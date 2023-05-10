import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles } from './app_bar';
const CustomAppBar = ({ handleDrawerToggle, position }) => {
  const classes = useStyles({ position });

  return (
    <AppBar
      position='fixed'
      className={classes.appBar}
    >
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          onClick={handleDrawerToggle}
          edge={position === 'left' ? 'start' : 'end'}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;

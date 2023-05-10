import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import navigationData from '../../utils/navigationData';
import { useStyles } from './sidebar_navigation';
const SidebarNavigation = (props) => {
  const classes = useStyles();

  const renderNavigationItems = () => {
    return navigationData.map((item, index) => {
      return (
        <ListItem
          button
          key={index}
          component={Link}
          to={item.link}
          onClick={props.handleDrawerClose}
        >
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItem>
      );
    });
  };

  return (
    <Drawer
      className={classes.drawer}
      variant={props.variant}
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor='left'
      open={props.open}
      onClose={props.handleDrawerClose}
    >
      <div className={classes.toolbar} />
      <Divider />
      <List>{renderNavigationItems()}</List>
      <Divider />
    </Drawer>
  );
};

export default SidebarNavigation;

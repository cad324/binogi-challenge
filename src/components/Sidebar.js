import React from "react";
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { style } from '../styles/Sidebar.Style';
import {
    Link,
  } from "react-router-dom";

const useStyles = makeStyles(style);

export default function Sidebar() {
    const classes = useStyles();

    return (
        <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
        >
            <div className={classes.toolbar} />
            <nav className={classes.nav}>
                <List>
                    <Link to="/">
                        <ListItem button>
                                <ListItemText primary={"Search Recipes"} />
                        </ListItem>
                    </Link>
                    <Link to="bookmarked">
                        <ListItem button>
                            <ListItemText primary={"Bookmarked Recipes"} />
                        </ListItem>
                    </Link>
                </List>
            </nav>
        </Drawer>
    );
}
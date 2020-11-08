import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavItem.module.css';

const navigationItem = (props) => (
    <li className={classes.NavItem}>
        <NavLink 
           to={props.link}
           exact
           activeClassName={classes.active}
         >{props.children}
        </NavLink>
    </li>
);

export default navigationItem;
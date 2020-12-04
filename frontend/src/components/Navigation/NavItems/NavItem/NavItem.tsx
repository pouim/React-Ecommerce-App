import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavItem.module.css';

interface navigationItemProps {
   link: string;
   children: React.ReactNode;
}

const navigationItem: React.FC<navigationItemProps> = (props) => (
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
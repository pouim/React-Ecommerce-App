import React from "react";
import classes from "./NavItems.module.css";
import NavItem from "../../Navigation/NavItems/NavItem/NavItem";

const NavItems = (props) => (
  <ul className={classes.NavItems}>
     {props.items ? 
       props.items.map(item => (
         <NavItem key= {item.id} link={item.link}>{item.title}</NavItem>
     )): null}
  </ul>
);

export default NavItems;


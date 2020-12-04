import React from "react";
import classes from "./NavItems.module.css";
import NavItem from "../../Navigation/NavItems/NavItem/NavItem";


export type item = {
  id: number;
  link: string;
  title: string;
  position: string;
}

interface NavItemsProps {
   items: item[] | null;
}

const NavItems: React.FC<NavItemsProps> = (props) => (
  <ul className={classes.NavItems}>
     {props.items ? 
       props.items.map(item => (
         <NavItem key= {item.id} link={item.link}>{item.title}</NavItem>
     )): null}
  </ul>
);

export default NavItems;


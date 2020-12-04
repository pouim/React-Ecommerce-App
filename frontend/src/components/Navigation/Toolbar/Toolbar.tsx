import React from "react";
import { Link } from 'react-router-dom';
import NavItems from "../NavItems/NavItems";
import classes from "../Toolbar/Toolbar.module.css";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";


export type item = {
  id: number;
  link: string;
  title: string;
  position: string;
}

interface ToolbarProps {
   navData: item[] | null;
   brandName: string;
   opacity: number;
   boxShadow: any;
   toggleDrawerClick: () => void;

}

const Toolbar:React.FC<ToolbarProps> = (props) => {
  const opacity = props.opacity;
  const boxShadow = props.boxShadow;
  return (
    <div className={classes.Toolbar} style= {{opacity: opacity, transition: "0.5s", boxShadow: boxShadow}}>
      <DrawerToggle clicked={props.toggleDrawerClick} />
      <nav className={classes.DesktopOnly}>
        <NavItems
          items={
            props.navData
              ? props.navData.filter((data) => data.position === "left")
              : null
          }
        />
      </nav>
      <Link to="/" className={classes.brand}>{props.brandName}</Link>
      <nav className={classes.DesktopOnly}>
        <NavItems
          items={
            props.navData
              ? props.navData.filter((data) => data.position === "right")
              : null
          }
        />
      </nav>
    </div>
  );
};

export default Toolbar;

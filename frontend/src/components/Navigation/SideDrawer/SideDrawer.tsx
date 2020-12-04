import React from 'react';
import NavItems from '../NavItems/NavItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

export type item = {
  id: number;
  link: string;
  title: string;
  position: string;
}

interface sideDrawerProps {
  open: boolean;
  closed: () => void;
  navData: item[];
}

const sideDrawer: React.FC<sideDrawerProps> = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
   return (
      <>
        <Backdrop show={props.open} clicked={props.closed} />
        <div className={attachedClasses.join(' ')} onClick={props.closed}>
            <nav style={{marginTop: "32px"}}>
                <NavItems items={props.navData} />
            </nav>
        </div>
      </>  
   )
};

export default sideDrawer;
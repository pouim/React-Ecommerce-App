import React, { useState, useEffect } from 'react'
// styles
import useStyles from "./styles";
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Footer from '../../components/Footer/Footer';
import { navData } from '../../mocks';

const Layout = props => {
    const  classes = useStyles();
    const [showSideDrawer, setShowSideDrawer] = useState(false);
    const [currentScrollHeight, setCurrentScrollHeight] = useState(null);
    const brandName = "fasion";
    useEffect(() => {
      window.onscroll = () => {
        setCurrentScrollHeight(window.scrollY);
      };
    }, []);
    const opacity = currentScrollHeight? 1: 0.7;
    const boxShadow = currentScrollHeight? "none": null;
    return (
      <div className={classes.root}>
        <>
          <header>
            <Toolbar
              navData={navData}
              brandName={brandName}
              toggleDrawerClick={() => setShowSideDrawer(true)}
              opacity= {opacity}
              boxShadow= {boxShadow}
            />
            <SideDrawer
              open={showSideDrawer}
              closed={() => setShowSideDrawer(false)}
              navData={navData}
            />
          </header>
          <main className={classes.content}>{props.children}</main>
          <footer>
            <Footer>All Rights Reserverd</Footer>
          </footer>
        </>
      </div>
    );
};


export default Layout;
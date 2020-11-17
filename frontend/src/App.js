import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Layout from './components/Layout/Layout';
import CatalogScreen from "./screens/CatalogScreen/CatalogScreen";
import ProductDetailScreen from './screens/ProductDetailScreen/ProductDetailScreen';
import CartScreen from './screens/CartScreen/CartScreen';
import CheckoutScreen from './screens/CheckoutScreen/CheckoutScreen';



const App = (props) => {

  return (
    <BrowserRouter>
    <Layout>
        <Route path={"/checkout"} component={CheckoutScreen} />
        <Route path={"/cart/:id?"} component={CartScreen} />
        <Route path={"/product/:id"} component={ProductDetailScreen} />
        <Route exact path="/" component={CatalogScreen} />
      
    </Layout>
    </BrowserRouter>
  );
};

export default App;





      // <div className="grid-container">
       
      //     <div>
      //       {/* <Toolbar
      //         navData= {navData}
      //         toggleDrawerClick={() => setShowSideDrawer(true)}
      //         isAuth={props.isAuthenticated}
      //         brandName="fasion"
      //       /> */}
      //       <SideDrawer
      //         navData= {navData}
      //         open={showSideDrawer}
      //         closed={() => setShowSideDrawer(false)}
      //         isAuth={props.isAuthenticated}
      //       />
      //     </div>
      //   <main>
          
      //     
      //   </main>
      //   <footer className="row center">All right reserved</footer>
      // </div>
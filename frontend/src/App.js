import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from './screens/ProductScreen';
import { useSelector } from "react-redux";
import CartScreen from './screens/CartScreen';
import Badge from './components/UI/Badge';

function App() {
  const cartReducer = useSelector(state => state.cartReducer);
  const { numItems } = cartReducer
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              amazona
            </Link>
          </div>
          <div>
            <Link to="/cart"><Badge numItems={numItems} /></Link>
            <Link to="/signin">Sign In</Link>
          </div>
        </header>
        <main>
          <Route path={"/cart/:id?"} component={CartScreen} />
          <Route path={"/product/:id"} component={ProductScreen} />
          <Route exact path="/" component={HomeScreen} />
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { Route } from 'react-router-dom';
import { useSelector } from "react-redux";

import Favorites from './pages/Favorites';
import Orders from './pages/Orders';
import Home from './pages/Home';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {

  const cartOpen = useSelector(({ cartItemsReducer }) => cartItemsReducer.cartOpened);

  return (
    <div className="wrapper">
      {cartOpen && <Drawer />}
      <Header />
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/favorites' exact>
        <Favorites />
      </Route>
      <Route path='/order' exact>
        <Orders />
      </Route>
    </div>
  );
}

export default App;

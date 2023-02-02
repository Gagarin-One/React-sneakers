import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './scss/App.scss';
import MainLayout from './Layouts/MainLayout';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import FullSneaker from './Pages/FullSneaker';
import Products from './Pages/Products';


function App() {
  return (
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route
          path=""
          element={<Home/>}
          />
          <Route
          path="Cart"
          element={<Cart/>}
          />
          <Route
          path="Sneaker/:id"
          element={<FullSneaker/>}
          />
          <Route
          path="Nike"
          element={<Products/>}
          />
          <Route
          path="Adidas"
          element={<Products/>}
          />
          <Route
          path="Sneakers"
          element={<Products/>}
          />
          <Route 
          path="Sale" 
          element={<Products/>}
          />
          <Route 
          path="Products"
          element={<Products/>}
          />
          <Route
          path="*"
          element={<NotFound/>}
          />
        </Route>
      </Routes>
  );
}

export default App;

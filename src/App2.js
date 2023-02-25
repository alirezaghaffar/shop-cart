import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom"

//components
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';

//context
import ProductContextProvider from './context/ProductContextProvider';

const App = () => {
  return (
      <ProductContextProvider>
    <Routes>
      <Route path='products/:id' element={<ProductDetails/>} />
      <Route path='/products' element={<Store />} />
      <Route path='/*' element={<Navigate to="/products" />} />
      
    </Routes>
      </ProductContextProvider>
  );
};

export default App;
import React from 'react';
import Header from './Header';
import CategoryList from './CategoryList';
import ProductGrid from './ProductGrid';
import '../styles/App.css';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <CategoryList />
      <ProductGrid />
    </div>
  );
};

export default App;

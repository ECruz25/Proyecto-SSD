import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PurchaseOrderList from './components/PurchaseOrderList';
import ProductList from './components/ProductList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProductList />
      </div>
    );
  }
}

export default App;

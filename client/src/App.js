import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import PurchaseOrderList from './components/PurchaseOrderList';
import ProductList from './components/ProductList';
import Nav from './components/Nav';

const StyledApp = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
`;

const App = () => (
  <Router>
    <StyledApp className="App">
      <Nav />
      <Switch>
        <Route path="/inventario" component={ProductList} />
      </Switch>
    </StyledApp>
  </Router>
);

export default App;
